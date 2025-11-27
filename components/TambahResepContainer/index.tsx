"use client";
import { useState } from "react";
import { SerializedEditorState } from "lexical";

import { Editor } from "@/components/blocks/editor-00/editor";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation"

// import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster } from "../ui/sonner";
import Link from "next/link";

const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Hello World 🚀",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as unknown as SerializedEditorState;
import { lexicalToHtml} from "@/app/utils/richToHtml"

const formSchema = z.object({
  nama: z.string().min(1, "Wajib diisi"),
  deskripsi: z.string().min(1, "Wajib diisi"),
  foto: z.any().optional(),
  sumber: z.string().min(1, "Pilih sumber resep"),
  resep: z.custom<SerializedEditorState>(() => true, {
    message: "Isi resep tidak boleh kosong",
  }),
});

function TambahResepContainer() {
  const router = useRouter()
  const [editorState, setEditorState] =
    useState<SerializedEditorState>(initialValue);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      deskripsi: "",
      sumber: "",
      resep: "",
    },
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const formData = new FormData();
    formData.append("name", values.nama);
    formData.append("description", values.deskripsi);
    formData.append("image", values.foto);
    formData.append("source", values.sumber);
    const htmlContent = lexicalToHtml(values.resep.root);
    console.log(htmlContent)
    formData.append("ingredients", htmlContent );

    try {
      const response = await fetch("http://localhost:8000/api/reseps", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.data) {
        console.log("Success:", json.data);

        toast.success(json.meta?.message || "Resep berhasil ditambahkan!");
        setTimeout(()=>{
          router.push('/')
        }, 2000)
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Terjadi kesalahan pada server");
    }
  }

  return (
    <>
      <div className="mx-auto my-4">
        <h1>Tambah Resep </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Nama */}
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem className="grid w-full gap-3 pt-2">
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="masukkan nama resep"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Deskripsi Resep */}
            <FormField
              control={form.control}
              name="deskripsi"
              render={({ field }) => (
                <FormItem className="grid w-full gap-3 pt-2">
                  <FormLabel>Deskripsi Resep</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="masukkan deskripsi resep"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Foto */}
            <FormField
              control={form.control}
              name="foto"
              render={({ field }) => (
                <FormItem className="grid w-full gap-3 pt-2">
                  <FormLabel>Foto</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Source */}
            <FormField
              control={form.control}
              name="sumber"
              render={({ field }) => (
                <FormItem className="grid w-full gap-3 pt-2">
                  <FormLabel>Source/Sumber</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sumber resep" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="youtube">Youtube</SelectItem>
                          <SelectItem value="tiktok">Tiktok</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="buku">Buku Resep</SelectItem>
                          <SelectItem value="sendiri">Buat Sendiri</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Isi Resep (Text Editor) */}
            <FormField
              control={form.control}
              name="resep"
              render={({ field }) => (
                <FormItem className="grid w-full gap-3 pt-2">
                  <FormLabel>Resep</FormLabel>
                  <FormControl>
                    <Editor
                      editorSerializedState={field.value}
                      onSerializedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-end pt-3">
              <Button type="submit">Tambah Resep</Button>
            </div>
          </form>
        </Form>
      </div>
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}

export default TambahResepContainer;

import { serve } from "https://deno.land/std@0.144.0/http/server.ts";
import { parse } from "https://deno.land/std@0.144.0/flags/mod.ts";

console.dir(parse(Deno.args));

const directory = "/workspaces/media-viewer/images";

async function getDirectoryFiles(dir: string) {
  for await (const dirEntry of Deno.readDir(dir)) {
    console.log(dirEntry.name);
  }
}

async function handler(req: Request): Promise<Response> {
  await getDirectoryFiles(directory);
  return new Response("Hello, World!");
}

serve(handler);

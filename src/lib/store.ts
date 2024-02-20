import Lenis from "@studio-freight/lenis/types";
import { writable } from "svelte/store";



export const navIsOpen = writable(false)

export const notMounted = writable(true)


export const scrollLenis = new Lenis()
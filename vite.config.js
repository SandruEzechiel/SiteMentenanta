import { defineConfig } from 'vite'
export default defineConfig({
   base: '',
   build:{
    rollupOptions: {
      input: [ "./index.html", "./servicii.html", "./despre-mine.html", "./cosul-meu.html", "./recenzii.html", "./programari.html", "./galerie.html", "./contact.html", "./intrebari-frecvente.html", "./oferte-speciale.html"]
    }
  }
})
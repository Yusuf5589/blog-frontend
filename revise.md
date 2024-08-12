-- yusuf


# 1) .env example eksik.
# 2) s ö zle ş me k ı s ı mlar ı backend olarak da do ğ ru de ğ il. slug olarak contract/slug ş eklinde bir rota olu ş turup,
# apiye ssr olacak ş ekilde istek at ı lmal ı sayfa url'sinden slug yakalan ı p.
# 3) genel olarak client side istek at ı lm ı s, server side'a ç evirilmeli.
# 4) e ğ er client'ta at ı lmas ı gerekiyorsa da swr kullan ı lmal ı .
# 5) loading i ç in swr' ı n parametresi kullan ı lmal ı , ek olarak set etmemiz gerekli de ğ il.
# 6) blog detay url olarak /blog/slug ş eklinde olmal ı . seo a çı s ı ndan slug ile istek at ı lmal ı , id de ğ il.
# 7) formlar react-hook-form ve yup kullan ı larak revize edilmeli.
# 8) meta data eklenmeli.
# 9) genel olarak sayfalar clienttan çı kar ı lmal ı , client olmas ı gereken yerler 
# k üçü k par ç alar ş eklinde component haline getirilmeli.
# 10) svgler sayfa i ç ine direkt eklenmemeli, public alt ı ndan ç a ğı r ı lmal ı .
# 11) Image tag ı de ğ il next/image kullan ı lmal ı .
# 12) getData ve getCategory aras ı nda bir fark yok, ayn ı i ş lemi yap ı yorlar. Kod tekrar ı olan k ı s ı mlara dikkat edelim.
# 13) ana bi fonksiyon yarat ı l ı p istekler ordan y ö netilebilir. sadece endpoint yollanarak. 
# su an tekrar tekrar ortak olan k ı s ı mlar yollan ı yor, bu da gereksiz kod tekrar ı yarat ı yor. ( ö rn: env linki)







# 1) detay sayfas ı server side olacak. sadece comment i ç in swr kullan ı lacak
# 2) category k ı sm ı nda fetch s ı k ı nt ı var ek olarak url'den al ı nacak ş ekilde d ü zenlenecek
# 3) resim gelmeyen k ı s ı mlarda placeholder eklenecek.
# 4) next config env'ye ba ğ lanacak.
# 5) class name hatas ı d ü zeltilecek
# 6) Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.
# 7) meta data detay sayfalar ı i ç in dinamik olacak.
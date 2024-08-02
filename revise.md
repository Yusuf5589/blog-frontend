-- yusuf


# 1) .env example eksik.
# 2) sözleşme kısımları backend olarak da doğru değil. slug olarak contract/slug şeklinde bir rota oluşturup,
# apiye ssr olacak şekilde istek atılmalı sayfa url'sinden slug yakalanıp.
# 3) genel olarak client side istek atılmıs, server side'a çevirilmeli.
# 4) eğer client'ta atılması gerekiyorsa da swr kullanılmalı.
# 5) loading için swr'ın parametresi kullanılmalı, ek olarak set etmemiz gerekli değil.
# 6) blog detay url olarak /blog/slug şeklinde olmalı. seo açısından slug ile istek atılmalı, id değil.
# 7) formlar react-hook-form ve yup kullanılarak revize edilmeli.
# 8) meta data eklenmeli.
# 9) genel olarak sayfalar clienttan çıkarılmalı, client olması gereken yerler 
# küçük parçalar şeklinde component haline getirilmeli.
# 10) svgler sayfa içine direkt eklenmemeli, public altından çağırılmalı.
# 11) Image tagı değil next/image kullanılmalı.
# 12) getData ve getCategory arasında bir fark yok, aynı işlemi yapıyorlar. Kod tekrarı olan kısımlara dikkat edelim.
# 13) ana bi fonksiyon yaratılıp istekler ordan yönetilebilir. sadece endpoint yollanarak. 
# su an tekrar tekrar ortak olan kısımlar yollanıyor, bu da gereksiz kod tekrarı yaratıyor. (örn: env linki)




<div>
      <div id="globalLoader">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt=""
        />
      </div>
      <h1>
        <div className="mx-auto p-5">
          <div className="w-[100%] flex justify-center font-bold text-6xl">
            {data && data.api[0].title}
          </div>

          <div className="xl:w-[60%] mx-auto flex mt-3 text-lg">
            {data && data.api[0].description}
          </div>
        </div>
      </h1>


    </div>
const references = {
  directory: ['CNFansSP · All Products','https://www.cnfanssp.com/AllProducts/'],
  jersey: ['CNFansSP · Jersey-60','https://www.cnfanssp.com/AllProducts/6667.html'],
  weidian: ['Weidian · item 7632511460','https://weidian.com/item.html?itemID=7632511460'],
  categories: ['CNFansSP · Jersey category','https://www.cnfanssp.com/jersey/'],
  registration: ['CNFansSP · Registration','https://www.cnfanssp.com/reg'],
  agents: ['CNFansSP · Agents','https://www.cnfanssp.com/Agents/'],
  search: ['CNFansSP · Jersey search','https://www.cnfanssp.com/search.html?keywords=Jersey&channelid=2'],
  compare: ['CNCNFans · Spreadsheet','https://www.cncnfans.com/spreadsheet/'],
  sourceLinks: ['FindQCS · Original listing checks','https://findqcs.org/articles/spreadsheet-find-original-listing-check'],
  platformLinks: ['ChinaRepTools · Marketplace and agent links','https://chinareptools.com/guide-how-to-convert-rep-links'],
  qc: ['CNFansSheet · QC and warehouse guide','https://cnfanssheet.com/cnfans-spreadsheet'],
  shipping: ['Superbuy · Warehouse and shipping guide','https://www.superbuy.com/en/page/guide/transportagent/'],
  service: ['CNFans · Registration and service status','https://cnfans.com/register/'],
  status: ['GRAILS · Agent service status','https://grails.fit/agent-status']
}
const published = '2026-11-24'

// Each entry contains a title, a summary and three independently actionable steps per locale.
const guides = [
  {
    slug:'how-to-use-cnfans-spreadsheet',
    sources:['directory','jersey','compare'],
    en:['How to use the CNFans spreadsheet','Start with a category or a short search, then follow the listing back to the original seller.',[
      ['Start with one useful term','Open the CNFansSP catalog and try a category word first, such as Jersey or Jackets. If you have an exact card name, search it too, but remove the number or punctuation if the first query is empty. Use the category page to scan matching photos when the names are generic.'],
      ['Record the original listing','Open the card on CNFansSP and find its seller button. Save the seller URL and the marketplace item ID together. Jersey-60 is a worked example: the CNFansSP page ends in 6667.html and its Weidian listing carries item ID 7632511460. Those numbers identify different pages.'],
      ['Check the exact option before ordering','On the seller page, match the color or style, confirm the size and check the price after selecting it. If an agent is involved, verify the same seller URL and option open with that agent. Keep one note per listing with the seller, variant, price checked and date.']
    ]],
    zh:['CNFans Spreadsheet 使用指南','从短关键词或分类开始，通过详情页找到卖家原链接。',[
      ['先搜类目词','打开 CNFansSP 目录，先搜 Jersey 或 Jackets 一类的短词。知道完整商品名时可以先试全名，搜不到再去掉编号或标点。商品名较笼统时，按分类翻看图片。'],
      ['保存卖家原链接','在主站详情页找到卖家按钮，保存卖家链接和商品 ID。以 Jersey-60 为例，主站页面以 6667.html 结尾，微店商品 ID 是 7632511460，分别对应目录详情和卖家商品。'],
      ['确认规格再下单','回卖家页选择颜色、款式和尺码，再看实际价格。如果走代购，核对代购页是否打开同一卖家和规格。把链接、规格、确认价格和日期记在一起，方便重查。']
    ]],
    es:['Cómo usar la hoja de productos de CNFans','Empieza con una categoría o una búsqueda corta y vuelve a la ficha original.',[
      ['Busca una palabra útil','Empieza en CNFansSP con un término como Jersey o Jackets. Si el nombre exacto no devuelve resultados, quita el número o la puntuación y revisa las fotos de la categoría.'],
      ['Guarda el enlace original','Abre la ficha y guarda el enlace del vendedor junto al ID. En Jersey-60, 6667.html identifica la ficha de CNFansSP y 7632511460 identifica el anuncio en Weidian.'],
      ['Comprueba la variante','Elige color y talla en el anuncio y comprueba el precio de esa opción. Si usas un agente, confirma que muestre la misma ficha y guarda la fecha de comprobación.']
    ]]
  },
  {
    slug:'weidian-item-id-and-seller-link',
    sources:['jersey','weidian','platformLinks'],
    en:['Find a Weidian item ID and seller link','Use the marketplace URL to identify the exact listing, even when a spreadsheet uses its own page number.',[
      ['Read the seller address','On Jersey-60, select Weidian Link. In the original listing URL, itemID=7632511460 identifies the product on Weidian. The number 6667 in the directory URL refers to the directory record. Keep the marketplace hostname alongside the item ID.'],
      ['Copy the seller URL before sharing','Copy the address reached through the seller button. If you only have an agent link, inspect any embedded marketplace link and compare its ID with the seller page before sharing it. When a shared link is shortened, open it and read the destination before recording it.'],
      ['Reopen and compare two details','Check the seller name and one distinctive option or photo. A title may be reused on several listings. If the link leads to a storefront, error page or unrelated item, return to the CNFansSP card and check its seller button again.']
    ]],
    zh:['怎么查微店商品 ID 和卖家原链接','用卖家页的 itemID 确认商品，并区分目录的页面编号。',[
      ['读卖家地址','在 Jersey-60 页面点击 Weidian Link。链接内的 itemID=7632511460 是微店商品 ID，目录链接里的 6667 是目录记录编号。保存数字时也记下平台域名。'],
      ['分享前复制完整链接','从卖家按钮到达原页面后，复制浏览器地址。有些代购链接内嵌了卖家链接，可以打开后核对其平台和 ID。短链接要先打开，确认最终地址。'],
      ['再次打开并核对','比对店铺名，以及一个可识别的规格或图片。多个店铺可能使用同一商品标题。若打开的是店铺首页或其他商品，回目录重新检查原链接。']
    ]],
    es:['Cómo encontrar el ID y el enlace de Weidian','Identifica la ficha exacta a partir de la URL del vendedor.',[
      ['Lee la URL original','En Jersey-60, el enlace de Weidian contiene itemID=7632511460. El número 6667 de la ficha del catálogo identifica un registro distinto. Guarda también el dominio del mercado.'],
      ['Copia el enlace completo','Copia la URL después de abrir la ficha del vendedor. Si recibes un enlace corto o de un agente, revisa su destino y compara el ID.'],
      ['Vuelve a comprobar','Compara el nombre de la tienda y una foto u opción distintiva. Si se abre una tienda, un error u otro artículo, revisa el enlace desde el catálogo.']
    ]]
  },
  {
    slug:'cnfans-spreadsheet-keyword-search',
    sources:['search','directory','categories'],
    en:['CNFans spreadsheet search by keyword or category','Use the query format the source actually supports, and recover listings that a numeric search misses.',[
      ['Start broad, then narrow','Try Jersey, Shoes or a distinctive title fragment. The form forwards the term to CNFansSP’s native search. If the result list is broad, switch to the relevant category and compare images or listing titles. Start with the wording displayed in the catalog when terms in your language return nothing.'],
      ['Treat a numeric ID as a cross-check','The main site’s text search did not return a match for 7632511460 during our check, while the Jersey-60 detail page displays the number. If you know only an ID, use a trusted seller URL or the relevant category and confirm the number inside the result.'],
      ['Keep a reusable trail','Once you find the right card, save both page addresses. Your search results can change as the catalog changes. The seller URL and selected variant give you a more precise starting point for checking the product later.']
    ]],
    zh:['CNFans Spreadsheet 怎么搜关键词和分类','使用主站实际支持的搜索，并通过详情核对纯数字 ID。',[
      ['先宽后窄','可以先搜 Jersey、Shoes 或标题中的独特单词。表单会打开 CNFansSP 自带搜索。结果太多可以切到分类，对照商品图和标题。本地语言无结果时，优先使用目录原文。'],
      ['数字 ID 用来核对','核对时直接搜索 7632511460 没有返回匹配，但 Jersey-60 详情显示了该 ID。只有编号时，先通过可信的卖家链接或类目定位，再在详情核对编号。'],
      ['记录两个地址','找到商品后保存目录详情和卖家原链接，并记下规格。搜索结果可能随目录更新变化，原链接更便于重新核对。']
    ]],
    es:['Buscar en CNFans Spreadsheet por palabra o categoría','Usa la búsqueda original y comprueba los IDs dentro de las fichas.',[
      ['Prueba un término breve','Busca Jersey, Shoes o un fragmento del título. El formulario abre la búsqueda de CNFansSP. Usa la categoría cuando los resultados sean demasiado amplios.'],
      ['Confirma el ID en la ficha','La búsqueda de 7632511460 no devolvió un resultado en nuestra comprobación, aunque ese ID aparece en Jersey-60. Localiza la ficha por el enlace del vendedor o la categoría.'],
      ['Guarda ambas direcciones','Conserva la ficha del catálogo, el enlace original y la variante. Los resultados pueden cambiar con las actualizaciones del catálogo.']
    ]]
  },
  {
    slug:'weidian-taobao-1688-links',
    sources:['compare','platformLinks','jersey'],
    en:['Weidian vs Taobao vs 1688 shopping links','Identify the original marketplace before comparing prices or submitting a listing to an agent.',[
      ['Read the hostname and product path','A Weidian item may use item.html with an itemID parameter. A Taobao listing commonly uses an id in its item URL, while a 1688 product may appear under an offer URL. Keep the full URL because identical digits can appear on different platforms.'],
      ['Compare the same quantity and variant','Check the selected variant, price currency, minimum quantity and seller terms. On a wholesale listing, inspect quantity tiers and the smallest order before using a unit price in your comparison. Ask the chosen agent whether that exact marketplace and seller can be used.'],
      ['Save the original before changing agents','When a buying-agent link stops working, go back to the marketplace source first. Verify product and seller details there. Use a replacement agent only after it recognizes the same listing and displays the requested option and quantity.']
    ]],
    zh:['微店、淘宝和 1688 商品链接怎么区分','先确认商品来源平台，再比较报价或交给代购。',[
      ['识别地址','微店商品常见 item.html 和 itemID；淘宝商品地址常用 id 参数；1688 商品可能使用 offer 路径。保存完整地址，避免把其他平台的相同数字混在一起。'],
      ['按相同规格和数量比价','核对款式、币种、起订量和商家条款。批发链接应先看阶梯价对应的数量。使用代购时，确认能读取该平台的具体商品。'],
      ['换代购时保留来源','代购链接失效时，先回卖家原商品页核对商品和店铺。新的代购页面需要识别同一商品，并显示你要购买的规格和数量。']
    ]],
    es:['Cómo distinguir enlaces de Weidian, Taobao y 1688','Identifica el mercado antes de comparar precios o enviar el enlace a un agente.',[
      ['Lee el dominio y la ruta','Weidian puede usar itemID, Taobao suele usar id y 1688 puede presentar una ruta de oferta. Guarda la dirección completa para evitar mezclar identificadores.'],
      ['Compara la misma variante','Revisa moneda, cantidad mínima y condiciones del vendedor. En ofertas mayoristas, comprueba a qué cantidad corresponde el precio por unidad.'],
      ['Conserva el enlace original','Si dejas de usar un agente, vuelve primero al anuncio. Confirma que el nuevo agente reconoce el mismo vendedor, la variante y la cantidad.']
    ]]
  },
  {
    slug:'verify-seller-listing-before-buying',
    sources:['sourceLinks','jersey','weidian'],
    en:['Verify a spreadsheet find before buying','Match the original seller, variant and terms in three checks before placing an order.',[
      ['Open the seller page from the card','The directory helps you discover products. Open the original marketplace listing and check that it shows the seller and the item you expected. If a copied link opens the store front instead, find the product itself before proceeding.'],
      ['Choose the actual option','Select style, size and quantity, then compare the photos and price for that option. Look for seller notes about customization, lead time and returns. A photo shared with several variants can make different materials or packages look similar.'],
      ['Keep evidence for support','Save the complete seller link, item ID and chosen option. A dated screenshot of the selected option can help if the listing changes after you order. Check the marketplace or agent’s available support route for the order you are placing.']
    ]],
    zh:['从目录找到商品后，购买前怎么核对','下单前对照卖家、具体规格和售后条款。',[
      ['从商品卡打开原页','点击目录里的卖家链接，确认当前页面显示预期的店铺和商品。若链接只打开店铺首页，先定位到具体商品链接。'],
      ['选择要买的规格','选中款式、尺码和数量后再比对图片与价格。检查定制、发货时间和退换说明。多规格可能共享图片，实际用料或套装内容仍需看选中的规格。'],
      ['保留下单依据','保存完整卖家链接、商品 ID 和已选规格。必要时保留带日期的规格截图，方便链接变化时核对，也便于向订单所在平台咨询。']
    ]],
    es:['Cómo comprobar un producto antes de comprar','Verifica vendedor, variante y condiciones antes del pedido.',[
      ['Abre la ficha original','Desde la tarjeta, comprueba que el anuncio muestra el producto y la tienda previstos. Si solo se abre la tienda, encuentra el anuncio exacto.'],
      ['Selecciona la variante real','Elige estilo, talla y cantidad antes de comparar fotos y precio. Revisa los avisos sobre personalización, plazos y devoluciones.'],
      ['Guarda una referencia','Conserva el enlace completo, el ID y la opción seleccionada. Una captura fechada puede ayudar si el anuncio cambia o necesitas consultar al soporte.']
    ]]
  },
  {
    slug:'cnfans-jersey-spreadsheet-size-check',
    sources:['categories','jersey','weidian'],
    en:['CNFans jersey spreadsheet: size and customization checks','Use the jersey category to find a style, then confirm garment measurements and any personalization with the seller.',[
      ['Find the actual listing','Open the jersey category and follow a card to the seller. Generic names such as Jersey-60 identify entries in the directory. Use the listing photos, seller name and item ID to distinguish between similar-looking entries.'],
      ['Compare measurements using the seller’s chart','Measure a jersey you already own laid flat. Compare the relevant points with the chart for the exact seller and style, especially chest width and length. Check whether the chart gives flat width or full circumference and keep the figures in the same unit.'],
      ['Write down personalization before payment','The example Weidian listing directs buyers to contact the seller for custom jerseys. If you want a name, number or patch, confirm spelling, placement, cost, lead time and returns before paying. Save the seller’s confirmation with the selected variant.']
    ]],
    zh:['CNFans 球衣清单：尺码和定制怎么确认','先用球衣分类选款，再跟卖家确认衣服实量和定制要求。',[
      ['找到卖家原商品','打开球衣分类，从商品卡跟到卖家页。Jersey-60 这类名称用于识别目录记录，具体款式可通过卖家图、店铺名和商品 ID 区分。'],
      ['对照卖家尺码表','选一件合身的球衣平铺测量，对照卖家该款式的胸宽、衣长等数据。确认尺码表写的是平铺宽度还是一圈的围度，并统一单位。'],
      ['记录定制要求','示例微店商品页提示定制球衣需联系卖家。需要印名字、号码或加章时，先确认拼写、位置、加价、制作时间和退换条件，并保存卖家回复。']
    ]],
    es:['Camisetas de CNFans: talla y personalización','Usa la categoría para elegir un modelo y confirma medidas y detalles con la tienda.',[
      ['Localiza la ficha original','Abre la categoría de camisetas deportivas y sigue el enlace de la tarjeta. Distingue modelos parecidos por fotos, vendedor e ID.'],
      ['Compara las medidas','Mide en plano una camiseta que te quede bien. Compara ancho y largo con la tabla del modelo y verifica si usa ancho en plano o perímetro.'],
      ['Confirma la personalización','El anuncio de ejemplo remite al vendedor para personalizar. Confirma nombre, número, posición, coste, plazo y condiciones antes de pagar.']
    ]]
  },
  {
    slug:'seller-photos-vs-warehouse-qc',
    sources:['qc','sourceLinks','shipping'],
    en:['QC photos and seller photos: what each can show','Confirm that a warehouse inspection photo belongs to the item and option you are evaluating.',[
      ['Identify the photo source','Seller images illustrate the listing. Warehouse quality-control photos are pictures taken after a parcel reaches a warehouse. A catalog can show seller images without providing any inspection photos for that particular listing.'],
      ['Match the photo to the selection','For historical QC examples, check the seller, item ID, option and date. Similar products may look alike across different sellers. For your own order, match the photos to the parcel and selected option in your account before approving shipment.'],
      ['Ask for the missing view','List one specific check, such as a size-tag photo or close-up of a zipper, and ask whether the agent offers it. Check the agent’s photo scope, price and return window. A picture can help identify a visible mismatch but may leave materials or fit unresolved.']
    ]],
    zh:['QC 实拍与卖家图有什么区别','判断仓库照片是否对应你要买的商品和规格。',[
      ['先确认图片来源','卖家图片用于展示商品。仓库 QC 照片通常在到仓后拍摄。目录商品卡的图片来源见主站，单凭图片无法推断该商品的仓库质检记录。'],
      ['对照具体规格','看历史 QC 图时，核对店铺、商品 ID、规格和日期。看自己订单的照片时，应在代购账号里对照对应包裹和所选规格，再确认是否发货。'],
      ['需要时补拍具体位置','如果还缺尺码标签或拉链细节，可以问代购是否提供对应补拍，并查看收费和退货窗口。照片可以帮助发现外观差异，材质手感和上身效果需要另行判断。']
    ]],
    es:['Fotos del vendedor y fotos de QC de almacén','Comprueba a qué pedido y variante corresponde una foto de inspección.',[
      ['Identifica el origen','Las fotos del vendedor presentan el anuncio. Las fotos de QC se toman después de recibir el paquete en almacén. Una tarjeta puede mostrar solo fotos del vendedor.'],
      ['Vincula la foto con tu selección','En fotos históricas, comprueba tienda, ID, variante y fecha. Para tu pedido, compara las imágenes con el paquete y la opción que aparecen en tu cuenta.'],
      ['Pide una vista concreta','Si falta la etiqueta o un detalle, consulta si el agente puede fotografiarlo y cuánto cuesta. Las imágenes ayudan a detectar diferencias visibles.']
    ]]
  },
  {
    slug:'spreadsheet-price-and-international-shipping',
    sources:['shipping','directory','agents'],
    en:['From spreadsheet price to delivered cost','Build an estimate from the selected seller option, delivery route and checkout charges.',[
      ['Start with the selected variant','Open the original listing and select the option and quantity. Record its price and currency. Add any domestic seller shipping shown for that order, then check the agent’s quote for service or optional handling.'],
      ['Compare the international leg separately','Use your actual destination and the expected packed weight and dimensions. Ask the carrier or agent which weight its line bills, and confirm restrictions and optional insurance. Use a new estimate after the warehouse supplies the packed measurements.'],
      ['Put both estimates on the same basis','Before comparing two quotes, align currency, package contents and destination. Check whether the displayed amounts cover duties or handling where applicable. Record estimated and confirmed charges in separate columns so you can tell which total is ready to compare.']
    ]],
    zh:['从清单标价到到手价：国际运费怎么估','按实际规格、寄送路线和结算费用拆开估算。',[
      ['记录实际规格价格','打开卖家原页，选中规格和数量，记下价格及币种。加上页面显示的境内运费，再查看代购的服务费和可选费用。'],
      ['单独比较国际段','使用真实目的地、预估打包重量及尺寸。向承运方确认线路的计费重量、限制和可选保险。到仓后，按打包实测值重新估算。'],
      ['统一比较口径','比较两个报价时统一币种、包裹内容和目的地。查清是否包含适用的税费、手续费。把预估费用和已确认费用列开，便于判断哪些数字可以直接比较。']
    ]],
    es:['Del precio del catálogo al coste de entrega','Estima el coste a partir de la variante, la ruta y los cargos del envío.',[
      ['Empieza por la variante','Selecciona la opción y la cantidad. Anota precio y moneda, añade el envío interno y comprueba las comisiones del agente.'],
      ['Calcula el tramo internacional','Usa destino, peso y dimensiones del paquete. Confirma con la agencia qué peso factura la ruta y vuelve a calcular cuando tengas medidas reales.'],
      ['Compara en las mismas condiciones','Iguala moneda, contenido del paquete y destino. Revisa si el total incluye gravámenes o cargos de gestión cuando correspondan.']
    ]]
  },
  {
    slug:'cnfans-agent-link-unavailable',
    sources:['service','status','jersey'],
    en:['What to do when a CNFans buying link will not open','Separate a broken agent link from the status of the original seller listing and any existing order.',[
      ['Test the seller link first','Return to the CNFansSP card and open its marketplace link. If the seller listing opens, confirm the item and variant there. An agent page can be unavailable while the seller listing remains accessible.'],
      ['Check the agent’s own status','On 24 November 2026 the CNFans registration route was unavailable in our check and its product link failed to load. A maintenance notice had also been published by CNFans. Recheck the current agent page and its support channel before relying on it for a new order.'],
      ['Handle existing orders with the original provider','Keep the order number, payment record and support correspondence together. Use the original provider’s support for that order. For a new order with any agent, confirm it accepts the exact seller URL and selected option before paying.']
    ]],
    zh:['CNFans 购买链接打不开怎么办','分别检查代购服务、卖家原商品和已有订单。',[
      ['先核对卖家商品','回 CNFansSP 商品页打开对应的卖家链接。卖家页能打开时，继续检查具体商品和规格。代购页面的可访问性和卖家商品页可以独立变化。'],
      ['核对代购状态','2026 年 11 月 24 日核对时，CNFans 代购注册入口不可用，商品代购链接也未加载。CNFans 曾发布维护公告。新下单前，重新查看代购当前状态和客服入口。'],
      ['已有订单找原服务方','保存订单号、付款记录和客服沟通。已有订单继续用原服务方的客服渠道处理。新订单无论用哪个代购，都先确认能接受完整卖家原链接及规格。']
    ]],
    es:['Qué hacer si no abre el enlace de compra de CNFans','Comprueba por separado el vendedor, el estado del agente y los pedidos existentes.',[
      ['Abre el anuncio original','Vuelve a CNFansSP y abre el enlace del mercado. Si funciona, verifica la ficha y la variante. El acceso al anuncio puede ser distinto del acceso al agente.'],
      ['Revisa el estado del agente','El 24 de noviembre de 2026 no pudimos acceder al registro de CNFans ni cargar su enlace del producto. CNFans había publicado un aviso de mantenimiento. Consulta su estado actual.'],
      ['Usa el soporte del pedido existente','Guarda número de pedido, recibos y conversaciones. Contacta con el proveedor original para pedidos ya hechos. Para uno nuevo, comprueba primero que el agente acepta el enlace exacto.']
    ]]
  },
  {
    slug:'cnfanssp-registration-vs-cnfans-account',
    sources:['registration','agents','service'],
    en:['CNFansSP registration and CNFans agent accounts','Identify the site that owns the account before registering or asking for order support.',[
      ['Read the address bar','The CNFansSP registration form is on www.cnfanssp.com/reg. The CNFans shopping-agent registration route is on cnfans.com/register/. The two domains have different roles. Check the domain before entering credentials.'],
      ['Choose the account relevant to the task','For a CNFansSP site account, use its own registration form. To browse a listing, open its details and seller link directly. When you place an order with a marketplace or agent, use that service’s account and check its current ordering status.'],
      ['Find account help where you registered','Use the account or order-help route belonging to the site that opened the account or accepted the order. Keep the domain, order number and contact record together so support can identify the correct service.']
    ]],
    zh:['CNFansSP 主站注册和 CNFans 代购账号有何区别','先看域名和用途，再选择注册入口或找订单客服。',[
      ['看浏览器地址','CNFansSP 注册页是 www.cnfanssp.com/reg；CNFans 代购注册地址是 cnfans.com/register/。输入个人信息前先核对当前域名。'],
      ['按用途选择','注册 CNFansSP 主站账号时使用主站表单。浏览商品可以直接打开详情和卖家原页。向某个平台或代购下单时，再检查该服务的账号和当前下单状态。'],
      ['按订单去找客服','账号或订单问题交给对应的平台。把使用的域名、订单号和沟通记录放在一起，方便客服确定是哪项服务。']
    ]],
    es:['Registro en CNFansSP y cuenta de compras de CNFans','Identifica qué sitio gestiona la cuenta y quién recibió el pedido.',[
      ['Lee el dominio','El formulario de CNFansSP está en www.cnfanssp.com/reg. El registro del agente CNFans usa cnfans.com/register/. Comprueba el dominio antes de introducir datos.'],
      ['Elige según la tarea','Usa el formulario de CNFansSP para su cuenta. Puedes abrir directamente las fichas del catálogo y del vendedor. Comprueba el estado antes de hacer un pedido a un agente.'],
      ['Consulta al proveedor correcto','Usa el soporte del sitio donde abriste la cuenta o hiciste el pedido. Guarda el dominio, el número de pedido y la conversación.']
    ]]
  }
]

const questions = [
  ['What is the CNFansSP spreadsheet?','A product directory whose category and detail pages lead to listings from marketplace sellers. This preview reads its catalog from CNFansSP.','CNFansSP 商品目录是什么？','它按分类和商品详情整理卖家链接。本预览的目录数据读取自 CNFansSP。','¿Qué es la hoja de CNFansSP?','Es un directorio de productos cuyas categorías y fichas llevan a anuncios de vendedores.'],
  ['Where does the search box take me?','It sends your term to the native CNFansSP search page. You can start with Jersey or Shoes.','搜索框会跳到哪里？','搜索词会提交到 CNFansSP 的主站搜索，可以从 Jersey 或 Shoes 开始。','¿Adónde lleva el buscador?','Envía tu palabra al buscador de CNFansSP. Puedes empezar por Jersey o Shoes.'],
  ['Why did an item ID return no results?','The native search matches catalog text. Open the listing to verify the ID or use the original marketplace link when you have it.','为什么搜商品 ID 没有结果？','主站搜索匹配目录文本。可以打开详情核对 ID，手上有卖家原链接时也可直接打开核对。','¿Por qué no aparece un ID en la búsqueda?','El buscador usa texto del catálogo. Abre la ficha o el enlace original para comprobar el ID.'],
  ['How do I find jerseys?','Choose Jerseys on the Categories page. The category button goes to the CNFansSP jersey listing.','怎么找球衣？','在分类页选择球衣，按钮会打开 CNFansSP 主站的球衣分类。','¿Cómo encuentro camisetas deportivas?','Elige Camisetas deportivas en Categorías para abrir la selección de CNFansSP.'],
  ['Can I search using translated product titles?','Try the words printed on the source listing first. Translated interface labels may differ from its catalog terms.','可以用翻译后的商品名搜索吗？','优先使用主站商品上显示的用词。界面翻译可能与主站目录词不同。','¿Puedo buscar títulos traducidos?','Prueba primero los términos de la ficha original. Las etiquetas traducidas pueden ser distintas.'],
  ['Where do I find the complete catalog?','Use View all on CNFansSP from the spreadsheet page to reach the source catalog and its pagination.','在哪里看完整商品列表？','在商品目录页点“前往主站查看全部”，即可使用主站自己的列表和分页。','¿Dónde está el catálogo completo?','Usa Ver todo en CNFansSP para abrir el catálogo original y su paginación.'],
  ['How do I get the original seller link?','Open the product on CNFansSP, then select its marketplace button. Jersey-60 has a Weidian Link button.','怎么获取卖家原链接？','打开 CNFansSP 商品详情，再点对应平台的按钮。Jersey-60 对应的是 Weidian Link。','¿Cómo consigo el enlace original?','Abre la ficha de CNFansSP y pulsa su enlace del mercado. Jersey-60 ofrece Weidian Link.'],
  ['Is 6667 the same as item ID 7632511460?','6667 is the CNFansSP page number for Jersey-60. 7632511460 identifies its original Weidian listing.','6667 和 7632511460 是什么编号？','6667 是 Jersey-60 的 CNFansSP 页面编号，7632511460 是对应的微店商品 ID。','¿Qué representan 6667 y 7632511460?','6667 identifica la ficha de Jersey-60 en CNFansSP. 7632511460 es el ID original de Weidian.'],
  ['How do I check stock or the current price?','Open the seller page and choose the exact color, style, size and quantity. Check the resulting price and availability there.','怎么核对库存和当前价格？','打开卖家页，选择具体颜色、款式、尺码及数量，再查看该规格的价格和库存。','¿Cómo compruebo precio y existencias?','Elige color, estilo, talla y cantidad en el anuncio, y consulta allí el precio y la disponibilidad.'],
  ['How should I compare jersey sizes?','Measure a jersey that fits and compare it with the seller’s chart for that style. Check whether the chart uses flat width or circumference.','怎样比较球衣尺码？','实测一件合身球衣，再对照卖家该款式的尺码表。注意区分平铺宽度和围度。','¿Cómo comparo las tallas de camisetas?','Mide una que te quede bien y usa la tabla del vendedor. Confirma si indica ancho en plano o perímetro.'],
  ['Where can I ask about jersey customization?','Use the seller’s contact option on the original listing. Confirm spelling, placement, cost and timing in writing.','球衣定制要找谁？','通过商品原页联系店铺，书面确认拼写、位置、价格和制作时间。','¿Dónde pregunto por personalización?','Contacta al vendedor desde el anuncio. Confirma por escrito texto, posición, coste y plazo.'],
  ['Can an old link still identify a listing?','Save the full marketplace URL and item ID. If a seller moves or removes the listing, compare the current seller and variant before proceeding.','旧链接还能帮助核对商品吗？','保存完整平台链接和商品 ID。原商品迁移或下架时，继续购买前需要重新核对店铺和规格。','¿Sirve un enlace antiguo para identificar una ficha?','Guarda la URL completa y el ID. Si el anuncio cambia, vuelve a comprobar vendedor y variante.'],
  ['What does a QC photo show?','A warehouse photo can show visible details after arrival. Match it to the correct listing, variant and parcel.','QC 照片能看出什么？','到仓照片可以帮助核对可见细节。要和正确的商品、规格及包裹对应起来。','¿Qué muestra una foto de QC?','Una foto de almacén muestra detalles visibles después de la llegada. Comprueba a qué ficha, variante y paquete pertenece.'],
  ['Do all catalog photos come from warehouse QC?','The images here come from CNFansSP listing pages. Check the photo’s origin before treating it as an inspection record.','目录图片都是仓库质检图吗？','这里显示的图片来自 CNFansSP 商品页。用作质检依据前，需要先核对照片来源。','¿Todas las imágenes son fotos de QC?','Estas imágenes proceden de CNFansSP. Comprueba el origen antes de tratarlas como fotos de inspección.'],
  ['Does the listed price include shipping?','Check the seller’s domestic delivery charge and the international quote separately. Use the selected option and destination.','目录标价包含运费吗？','请分别查看境内运费和国际报价，按实际规格、数量和目的地核对。','¿El precio publicado incluye el envío?','Consulta por separado el envío interno y el internacional, usando la variante y el destino reales.'],
  ['Why do international shipping quotes vary?','Routes quote based on factors such as destination, weight and package size. Ask which weight the selected line bills.','国际运费报价为什么不同？','线路可能根据目的地、重量和尺寸等条件计价，建议确认所选线路按哪种重量计费。','¿Por qué varían las tarifas internacionales?','Dependen de la ruta, el destino, el peso y el tamaño. Verifica qué peso factura la línea.'],
  ['Can several items ship in one parcel?','Some agents offer warehouse consolidation. Check eligible items, packaging, restrictions and the final price with the active provider.','几件商品可以一起发吗？','部分代购提供仓库合包。向实际服务方确认适用商品、包装、线路限制和最终报价。','¿Puedo enviar varios artículos juntos?','Algunos agentes consolidan artículos. Confirma condiciones, restricciones y precio con el proveedor.'],
  ['Who handles returns or order disputes?','Contact the marketplace or agent that took the order. Keep the seller link, selected variant and payment record.','退货或订单争议找谁？','找实际接单的电商平台或代购，并保留卖家链接、选中的规格和支付记录。','¿Quién atiende devoluciones o disputas?','Contacta con el mercado o agente que recibió el pedido y guarda el enlace, la variante y el recibo.'],
  ['Where do I register for CNFansSP?','Use Register in the header to open the CNFansSP account form.','在哪里注册 CNFansSP？','点击页面顶部“注册”，即可打开 CNFansSP 主站注册表单。','¿Dónde me registro en CNFansSP?','Pulsa Registrarse en la cabecera para abrir el formulario oficial de CNFansSP.'],
  ['Which site handles a CNFans agent account?','CNFans agent accounts use cnfans.com. Its live service status can change, so check the agent’s own page.','CNFans 代购账号在哪个网站？','CNFans 代购账号使用 cnfans.com。服务状态可能变化，请查代购站当时的页面。','¿Qué sitio gestiona una cuenta del agente CNFans?','Las cuentas del agente usan cnfans.com. Consulta allí el estado actual del servicio.'],
  ['What if the CNFans buying page fails to open?','Open the original seller link, check the agent’s status and use its support channel for any existing order.','CNFans 代购购买页打不开怎么办？','打开卖家原链接，查看代购服务状态。已有订单请走对应代购的客服。','¿Qué hago si no abre el enlace del agente?','Abre el anuncio original, consulta el estado del agente y usa su soporte para pedidos existentes.'],
  ['Can I use another agent with the same seller link?','Ask the current provider whether it supports the exact marketplace URL, item, variant and shipping destination.','同一个卖家链接能换代购吗？','向拟使用的代购确认它接受同一平台链接和商品规格，并支持目的地。','¿Puedo usar el mismo enlace con otro agente?','Confirma que el proveedor acepta ese enlace, el artículo, la variante y el destino.'],
  ['Does changing language translate the seller page?','The picker changes the preview interface. The marketplace and CNFansSP pages open with the language they provide.','切换语言也会翻译卖家页吗？','语言选择器切换此预览站的界面。卖家和 CNFansSP 主站页面使用各自提供的语言。','¿Cambiar de idioma traduce el anuncio?','El selector cambia la interfaz de la vista previa. El anuncio conserva el idioma del sitio de origen.'],
  ['What should I save before contacting support?','Keep the original listing URL, the order reference, the selected measurements or variant and any relevant seller messages.','联系客服前要保存什么？','保留卖家原链接、订单号、选择的尺码或规格和有关聊天记录。','¿Qué debo guardar antes de contactar con soporte?','Conserva URL original, referencia del pedido, variante o medidas y mensajes relevantes del vendedor.']
]

function questionContent(index, lang) {
  const offset = {en:0,zh:2,es:4}[editorialLanguage(lang)]
  return questions[index].slice(offset,offset+2)
}

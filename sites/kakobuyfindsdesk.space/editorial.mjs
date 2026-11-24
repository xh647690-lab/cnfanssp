const catalog = ['CNFansSP product catalog','https://www.cnfanssp.com/AllProducts/'];
const home = ['CNFansSP homepage','https://www.cnfanssp.com/'];
const jerseys = ['CNFansSP jersey category','https://www.cnfanssp.com/jersey/'];
const jersey = ['CNFansSP Jersey-60','https://www.cnfanssp.com/AllProducts/6667.html'];
const weidian = ['Weidian seller listing','https://weidian.com/item.html?itemID=7632511460'];
const registration = ['CNFansSP registration','https://www.cnfanssp.com/reg'];
const login = ['CNFansSP login','https://www.cnfanssp.com/user'];
const agent = ['Superbuy shopping-agent guide','https://www.superbuy.com/en/page/guide/shoppingagent/'];
const app = ['Superbuy buyer guide','https://www.superbuy.com/en/page/shopguidelines/'];
const competitor = ['Kakobuy Picklist FAQ','https://kakobuypicklist.com/'];
const converter = ['ChinaRepTools link-format reference','https://chinareptools.com/guide-how-to-convert-rep-links'];
const nativeSearch = ['CNFansSP live search for Jersey-60','https://www.cnfanssp.com/search.html?channelid=2&keywords=Jersey-60'];

function article(slug, intent, title, summary, sections, references) {
  return { slug, intent, title, summary, sections, references };
}

export const articles = [
  article('cnfans-spreadsheet-guide', 'CNFans spreadsheet',
    'How to use the CNFansSP spreadsheet',
    'Find a listing, check which marketplace it came from, and keep the right link for your purchase.',
    [
      ['Start with what you know', 'Use a product name in search when you have a specific item in mind. If you have only an item type, choose a category first. A broad term such as jersey may return a series of numbered names, so compare thumbnail, listing title and displayed price before opening the item.'],
      ['Read the three pieces separately', 'The spreadsheet card is a shortcut. The CNFansSP detail page identifies the listing and its outbound links. The seller page is where you check current options and availability. Jersey-60 is a useful example: the catalog detail shows product ID 7632511460, and its Weidian link carries the same number as itemID.'],
      ['Save the link you can reuse', 'Keep the seller URL alongside the catalog URL if you plan to revisit the item. If an agent link fails later, these two links let you identify the original listing without depending on an earlier redirect. Confirm the selected option and checkout total with the seller or your chosen agent.']
    ], [home,catalog,jersey,competitor]),
  article('search-cnfanssp-by-name-or-id', 'CNFans spreadsheet search, product ID search',
    'CNFansSP search by name or product ID',
    'Use the right identifier to find a CNFansSP result without confusing its page number with the marketplace item ID.',
    [
      ['Search the name the catalog displays', 'Start with the title as it appears on CNFansSP, then shorten it if the spelling or punctuation differs. The search form sends the term to CNFansSP. Try Jersey-60 first, or use Jersey and open the category if you want to compare several options.'],
      ['Know which number you copied', 'The detail URL ends in 6667.html for Jersey-60. That is the catalog page number. The detail page displays 7632511460, and Weidian uses that number as the value of itemID. This preview recognizes that verified example and sends its current title to the native search. Other IDs depend on what the main site indexes.'],
      ['Recover an empty result', 'If a long ID returns nothing, open the original link if you have it. Use the title shown on that listing, then compare the catalog detail ID before relying on a match. If all you have is a screenshot, search a recognizable product type and verify the seller URL separately.']
    ], [nativeSearch,jersey,weidian,catalog]),
  article('weidian-jersey-size-checklist', 'Weidian jerseys, jersey spreadsheet',
    'Weidian jersey listings: a size and option checklist',
    'Use the jersey category to find a candidate, then check the edition, measurements and customization before buying.',
    [
      ['Use the category to compare listings', 'Open the Jersey category and shortlist by photo, seller and price. A title such as Jersey-60 identifies a catalog entry. Check the seller listing for the actual style and the available selections. The detail page for this example carries both a listing ID and the Weidian link.'],
      ['Match the exact option', 'Compare stated garment measurements with a jersey you own. Measure both garments the same way and check units. If the seller supplies a different chart for each style, use the chart for the exact option you intend to order. For customization, ask whether names, numbers or patches change the price, production time or return terms.'],
      ['Keep a record at checkout', 'Save the listing URL, selected size and any agreed customization. The sample Weidian listing mentions that custom jerseys should be discussed via the listing details. If using an agent, confirm its handling of customization and request the corresponding inspection photos if that service is available.']
    ], [jerseys,jersey,weidian,agent]),
  article('original-weidian-link-vs-agent-link', 'Weidian link converter, agent link to item ID',
    'Original Weidian link vs. shopping-agent link',
    'Identify the underlying marketplace listing and use an agent link only after checking where it points.',
    [
      ['Recognize the original', 'A Weidian seller URL uses the marketplace hostname and, in the Jersey-60 example, an itemID query parameter. Copy the complete original URL. An agent page may show its own tracking or catalog parameters, so preserve the seller URL separately.'],
      ['Follow the verified handoff', 'Check the CNFansSP detail page for its original marketplace link. If you choose an agent, use its own product search and paste the original seller URL. Confirm the product, seller, variant and price in the resulting page before continuing. Agent support for a marketplace or item can change.'],
      ['Handle a link error once', 'Reopen the original listing and check whether it still exists. If the listing loads and your agent rejects it, consult the agent’s published restrictions or support. If the seller page itself is inaccessible, use the title to find a current listing and compare its ID instead of assuming it is the same item.']
    ], [jersey,weidian,converter,app]),
  article('weidian-taobao-1688-shopping-guide', 'Weidian vs Taobao vs 1688',
    'Weidian, Taobao or 1688: read the seller listing first',
    'Look at the marketplace, pricing unit and minimum order before comparing offers found in a spreadsheet.',
    [
      ['Identify the marketplace from the link', 'Open the original listing from the catalog and read its hostname. This is more reliable than a product name or the logo on an agent’s landing page. Save the original URL and use it when comparing a listing in more than one agent.'],
      ['Compare an equivalent order', 'Choose the same color, style and size before comparing prices. Check whether an offer is priced per item, per set, or for a quantity tier. This matters when a 1688 listing shows a minimum quantity or different prices at different quantities. Verify domestic delivery charges and ask the agent how it handles the selected marketplace.'],
      ['Record price and restrictions in one place', 'For each option, record the full listing URL, option name, quantity, displayed item subtotal and any stated seller terms. Then confirm whether the agent can place that exact order. Two identical photos can still represent different quantities or seller arrangements.']
    ], [catalog,jersey,converter,agent]),
  article('cnfanssp-registration-and-login', 'CNFansSP registration, CNFansSP login',
    'CNFansSP registration and login: which page to open',
    'Find the catalog account pages and know when you need to contact an independent seller or shopping agent.',
    [
      ['Open the catalog account form', 'Use the Sign up button to open the CNFansSP registration page. The source page displays account and mobile registration tabs. It also displays an agreement prompt. Review the form and its terms directly on the source domain before submitting any details.'],
      ['Use the login page for an existing account', 'The source login page offers account and phone login. If you already have a catalog account, use that page or its password reset link. For a purchase made on a separate marketplace or agent, use the account page for the service that took your order.'],
      ['Know where order information belongs', 'CNFansSP describes its role as a product discovery directory. A catalog sign-up does not give this preview access to seller carts, parcels or order records. When you need support, use the service shown on the receipt and keep the order number for that platform.']
    ], [registration,login,home]),
  article('seller-photos-vs-qc-photos', 'QC photos, warehouse inspection, quality check',
    'Seller listing photos vs. warehouse QC photos',
    'Tell apart listing images, reference inspections and photos of the specific item in your agent’s warehouse.',
    [
      ['Check whose item the image shows', 'A listing photo represents what the seller advertises. A reference QC photo may show another buyer’s order or another option. A warehouse photo attached to your own order is the one you can use to compare your delivered item with the order details. Start by verifying the listing ID and selected option.'],
      ['Look for what a photo can establish', 'For clothing, request the measurements or angles you need if your agent offers that service. Compare the tag, visible color, print placement and visible defects against the confirmed selection. Lighting, scale and camera angle can change how a color or measurement appears. Photos alone cannot establish authenticity, durability or fit.'],
      ['Make the decision before shipping', 'If an image is missing or unclear, check the agent’s photo policy and exchange deadline before dispatch. Keep the warehouse images and the original seller URL together so any support request refers to the correct option.']
    ], [jersey,competitor,agent,app]),
  article('yuan-price-and-shipping-costs', 'spreadsheet price CNY, shopping agent shipping estimate',
    'CNY listing price and the cost of a delivered parcel',
    'Understand which costs you can read in the spreadsheet and which come from the seller, agent or carrier.',
    [
      ['Start with the selected item price', 'CNFansSP catalog prices are displayed in Chinese yuan in this preview. The listing may offer options at different prices. Check the exact option and quantity on the seller or agent page. Save the price and currency separately if comparing multiple offers.'],
      ['Build the estimate from its components', 'Record item subtotal, domestic delivery, any agent handling or payment costs and the quoted international shipping. Depending on the carrier and destination, the quote may change with packed dimensions, weight or shipping line. Review any destination charges separately using the carrier or official guidance for your destination.'],
      ['Recheck just before payment', 'A currency conversion or a shipping calculator gives an estimate. Confirm the exchange rate, checkout total and shipping restrictions with the service that will take payment. If you compare two agents, use the same destination, item and parcel assumptions.']
    ], [catalog,weidian,agent,app]),
  article('shopping-agent-order-and-warehouse', 'shopping agent guide, warehouse consolidation',
    'How a shopping-agent order moves from seller to warehouse',
    'Follow the three handoffs that affect availability, inspection and international shipping.',
    [
      ['Handoff 1: seller and purchase request', 'Copy the original seller link and select the exact quantity and option in the agent’s ordering flow. An agent can confirm whether it supports the marketplace and item. Save what you selected. If the seller cannot supply the variant, check the agent’s change or refund process.'],
      ['Handoff 2: receipt and inspection', 'Some agents photograph and store items after they reach the warehouse. Inspect the photos against your ordered options and review the permitted return window before approving shipment. The catalog itself can only send you to the listing. Warehouse and parcel records live with the agent associated with the order.'],
      ['Handoff 3: outgoing parcel', 'If the agent offers consolidation, review which items can share a parcel and any restrictions on the shipping line. Check the packed weight and dimensions against your earlier estimate, then keep the parcel tracking number with the agent’s order record.']
    ], [home,agent,app]),
  article('fix-cnfanssp-product-links', 'CNFans spreadsheet link not working, Weidian listing unavailable',
    'CNFansSP product link not working: what to check',
    'Identify whether the problem is the spreadsheet page, the seller listing or an agent’s availability.',
    [
      ['Open the main catalog detail directly', 'If a shared preview link is broken, search the title on CNFansSP or browse its category. Verify the ID against your earlier record. A similar name or photo does not prove you found the same listing.'],
      ['Test the original seller link', 'Open the marketplace link from the catalog detail page. The seller may have removed the listing, changed the available variants or required login. Check the page for the specific reason and revisit by title or category if the listing was removed.'],
      ['Keep agent availability separate', 'If the seller link works but an agent link fails, record the exact message and check the agent’s marketplace support or product restrictions. Use its current ordering or official support pages before attempting a new order. For an existing order, contact the platform that took payment and keep the original listing and order number.']
    ], [catalog,jersey,weidian,converter,app])
];

const qa = (id, guide, en, zh) => ({ id, guide, en, zh });
export const faqs = [
  qa('item-7632511460',1,['Where is CNFansSP item 7632511460?','It is Jersey-60. The detail page lists 7632511460 and links to the matching Weidian listing. Search Jersey-60 or enter the example ID in the preview.'],['在哪里找到商品 7632511460？','它是 Jersey-60。CNFansSP 详情显示该 ID 并链接到对应的微店商品，可搜索 Jersey-60 或在预览输入这个 ID。']),
  qa('search-scope',1,['Where do search results open?','The search box opens CNFansSP’s own results for the submitted keyword. The verified example ID 7632511460 is resolved to the current catalog title before searching.'],['搜索结果会在哪里打开？','搜索框会打开 CNFansSP 主站的关键词结果。示例商品 7632511460 会先解析为源站的当前商品名称。']),
  qa('buy-link',3,['Where does the purchase link lead?','Open the item on CNFansSP and choose the original marketplace link or an agent listed by the source. Check the option and price on the destination before ordering.'],['购买链接会跳转到哪里？','打开 CNFansSP 商品详情后，选择原始卖家链接或源站列出的代购入口，并在目标网站核对规格与价格。']),
  qa('about',0,['What is the CNFansSP spreadsheet?','It is a catalog for finding listings. You can use it to compare titles, photos, prices and outbound links before opening the seller or agent page.'],['CNFansSP 商品表是什么？','它是商品目录，可以比较名称、图片、价格和外链，再打开卖家或代购页面。']),
  qa('cnfans-vs-cnfanssp',5,['Are CNFans and CNFansSP the same service?','CNFansSP describes itself as an independent product discovery site. Order records and payments belong to the seller or agent you actually use.'],['CNFans 和 CNFansSP 是同一服务吗？','CNFansSP 将自己描述为独立的商品信息站。订单和支付记录由实际使用的卖家或代购平台保存。']),
  qa('categories',0,['How do I browse a category?','Open Categories and select a product type. Each option takes you to the matching category on CNFansSP.'],['怎么按分类浏览？','打开分类页并选择品类，会进入 CNFansSP 对应的主站分类。']),
  qa('detail',0,['Where can I see the product details?','Select a product card to open the original CNFansSP detail page, where the source displays its listing ID and available links.'],['在哪里看商品详情？','点击商品卡片进入 CNFansSP 原始详情页，查看源站显示的商品 ID 和可用链接。']),
  qa('price',7,['What currency is shown in the catalog?','The preview displays the source item price in CNY (¥). Confirm the selected option, price and delivery charges at checkout.'],['目录价格是什么币种？','预览按人民币（¥）显示源站商品价。所选规格的价格和运费以结算页为准。']),
  qa('registration',5,['Where do I create a CNFansSP account?','Use Sign up to reach the registration form on CNFansSP. Review the source site’s fields and terms before submitting.'],['在哪里注册 CNFansSP 账号？','点击注册进入 CNFansSP 站内表单，提交前核对源站字段和协议。']),
  qa('checkout',5,['Do I need a separate account to buy?','The marketplace or agent may require its own account. Use the account associated with the service that handles your order.'],['购买需要单独注册吗？','卖家平台或代购可能需要独立账号。请用实际处理订单的平台账号。']),
  qa('two-ids',1,['Why are there two numbers for some items?','A CNFansSP detail URL may contain its own page number. The product ID displayed in the detail can instead correspond to the seller’s listing ID.'],['为什么有的商品有两个编号？','CNFansSP 详情网址可能用站内页面编号，页面展示的商品 ID 则可能对应卖家的商品编号。']),
  qa('no-results',1,['What if my search returns nothing?','Try a shorter phrase from the exact listing title, or browse its category. Some marketplace IDs are absent from the source’s keyword index.'],['搜不到商品怎么办？','用源站标题中的简短关键词，或直接查看分类。部分平台商品 ID 可能没有进入主站的关键词索引。']),
  qa('jersey-size',2,['How should I choose a jersey size?','Use the seller’s measurement chart for the exact item and compare it with a garment you own. Ask the seller to clarify ambiguous or missing measurements.'],['球衣尺码怎么选？','按卖家给出的对应款式尺码表，与手上的衣物测量值比较。尺寸含糊或缺少时向卖家确认。']),
  qa('custom-jersey',2,['Can I add a name or number to a jersey?','Ask the seller whether the selected option supports customization, and confirm the extra cost, lead time and return terms.'],['球衣可以印名字或号码吗？','向卖家确认该款是否支持定制，以及费用、制作时间和退换条件。']),
  qa('original-link',3,['How do I identify an original Weidian link?','Check that it goes to Weidian and includes the listing’s itemID. The marketplace URL can be copied separately from an agent’s order link.'],['怎么识别微店原始链接？','确认网址指向微店并包含对应的 itemID。可把原始商品链接与代购链接分别保存。']),
  qa('move-agent',3,['Can I open the same item with another agent?','If that agent supports the marketplace and item, paste the original seller link into its product search. Verify the displayed item and variant before ordering.'],['同一件商品能换代购打开吗？','目标代购支持该平台和商品时，可把卖家原始链接粘贴到代购搜索框，再核对商品及规格。']),
  qa('minimum-order',4,['Why is a 1688 price hard to compare?','A listing may price by quantity tier or require a minimum order. Compare the subtotal for the actual quantity along with delivery and handling.'],['为什么 1688 商品价格不好直接比较？','有些链接按数量阶梯报价或设有起订量。应按实际数量计算商品小计，再加运费和服务费。']),
  qa('qc-meaning',6,['What does QC mean?','QC means quality check. Some agents provide inspection images when goods reach their warehouse. Services and coverage vary by agent.'],['QC 是什么意思？','QC 指质量检查。有些代购会在商品到仓后提供验货照片，具体范围以代购规定为准。']),
  qa('photo-difference',6,['Are brochure photos and QC photos the same?','Seller photos show the advertised listing. Order-specific QC photos, when provided, show the item received by the agent’s warehouse.'],['商品展示图和 QC 照片一样吗？','卖家图展示商品页面，针对订单的 QC 照片则展示代购仓实际收到的商品。']),
  qa('shipping',7,['Does the shown price include international shipping?','Treat it as the listing price. Estimate shipping separately on the seller or agent platform using the parcel and destination details.'],['显示的价格包含国际运费吗？','页面展示商品价。国际运费应在卖家或代购平台按包裹和目的地单独估算。']),
  qa('warehouse',8,['What happens after an agent buys an item?','Depending on the service, the seller sends the item to the agent’s warehouse, where inspection and storage may occur before international shipping.'],['代购下单后会发生什么？','视代购服务而定，卖家把商品寄到仓库，之后可验货和储存，再安排国际运输。']),
  qa('consolidation',8,['What does parcel consolidation mean?','An agent may combine eligible items into a single parcel. Check the line’s restrictions, dimensions and final price before approving it.'],['什么是合箱？','代购可能把符合条件的商品合为一个包裹。确认前检查线路限制、尺寸和最终价格。']),
  qa('stale-links',9,['What if an outbound link stops working?','Check the original listing link and the agent link separately. If the seller delisted the item, use the catalog title or category to look for another listing.'],['外链打不开怎么办？','分别检查卖家原始链接和代购链接。如果卖家下架了商品，可用商品名称或分类寻找新的链接。']),
  qa('actual-order',9,['Who can help with an existing purchase?','Contact the platform that took payment and keep the order number, seller URL and any screenshots of the confirmed option.'],['已有订单该找谁处理？','联系实际收款的平台，准备好订单号、卖家链接和已确认规格的截图。'])
];

const chineseGuides = [
  ['CNFansSP 商品表怎么用？','从找商品、核对详情到保存原始购买链接，按三步操作。',[
    ['从商品名或分类开始','知道商品名时先搜标题。只知道品类时先打开分类。以球衣为例，分类中存在多个以 Jersey 加数字命名的商品，先用照片和页面价格缩小范围，再进详情核对。'],
    ['区分目录、详情和卖家页','商品卡片是入口。CNFansSP 详情列出源站的商品 ID 和出站链接，规格和可售情况则以卖家页为准。Jersey-60 的详情展示 7632511460，微店链接的 itemID 也是这个号码。'],
    ['同时保存两条链接','保留目录详情和卖家原始链接。日后代购链接失效时，可用原始链接确认商品、卖家和规格。结算前再到实际下单平台核对选项、价格及运费。']
  ]],
  ['怎么用名称或商品 ID 搜索 CNFansSP？','区分站内页码和卖家商品 ID，用主站能够识别的关键词找回链接。',[
    ['先用目录里显示的名字','优先输入商品完整标题，比如 Jersey-60。输不出完全一致的标点时，先用 Jersey 这类核心词。想比较同类商品时，可从主站的球衣分类继续。'],
    ['认清两个编号','Jersey-60 详情网址以 6667.html 结尾，这是目录页码。商品详情展示的 7632511460 是微店链接里的 itemID。这个已核对的 ID 在预览会先解析为源站标题，再打开主站搜索。其他 ID 取决于主站索引。'],
    ['遇到空结果时怎么查','有卖家原始链接时，先打开它核对标题或商品号。如果只有截图，从可识别的品类入手，然后比较卖家链接和详情里的 ID。']
  ]],
  ['微店球衣怎么选？尺码和定制核对清单','从球衣分类找样款，再到卖家页面核对具体版本、尺寸与定制条件。',[
    ['用分类挑几个候选','先按照片、卖家和价格比较球衣。Jersey-60 是目录条目名，实际有哪几种可选规格，要打开详情中的微店链接查看。'],
    ['只比较对应款式的尺码','拿一件合身的球衣按相同方法测量，对照卖家给该款的尺码表并核对单位。若要加名字、号码或袖章，先问是否支持、怎么收费、需要多久，以及定制品能否退换。'],
    ['下单前留档','保存链接、所选尺码与卖家确认的定制信息。示例微店商品提示定制球衣需通过商品详情沟通。用代购时，可先检查是否接受定制和能否提供相应的验货照片。']
  ]],
  ['微店原始链接和代购链接有什么区别？','通过域名和商品 ID 找到原始卖家，再核对代购跳转后的商品。',[
    ['看域名和参数','微店原页使用微店域名。本例的 URL 还包含 itemID，它可与 CNFansSP 详情里的商品 ID 相互核对。建议单独保留完整的卖家原始网址。'],
    ['在代购站核对所选商品','打开 CNFansSP 详情里的卖家链接。使用代购时，按该平台指引粘贴原始网址，确认商品、卖家、规格和价格。各代购支持的平台和商品范围随时可能变化。'],
    ['分别排查两端','若卖家页能打开，但代购报错，查看代购的购买限制或联系客服。如果原页也失效，可用标题找新商品，并核对新链接的 ID，避免把不同卖家的相似商品当成同一条链接。']
  ]],
  ['微店、淘宝和 1688 链接怎么比较？','从平台、计价单位、起订量和实际购买数量几方面比较卖家商品。',[
    ['通过链接确认来源','打开目录里的原始商品页，看网址的域名判断来源。跨代购对比时，用同一个卖家链接和规格作为基准。'],
    ['对齐实际购买条件','核对款式、颜色、尺码和购买量。报价可能按件、按套或按数量阶梯计算。查看 1688 商品时尤其要核对起订量、选定数量的单价和境内运费。'],
    ['把可比信息放在一起','为每个候选记录链接、规格、数量、商品小计和卖家条款，再确认目标代购能处理这一笔订单。两张相似的商品图可能对应不同规格或不同数量。']
  ]],
  ['CNFansSP 注册和登录入口','找到目录账号页面，并确定已有购物订单应该去哪里处理。',[
    ['新账号从源站注册','用预览的注册按钮进入 CNFansSP 原站。页面展示账号注册和手机注册入口，提交前应在源站查看字段、用户协议和隐私政策。'],
    ['已有账号到源站登录','已有目录账号时用 CNFansSP 的登录或找回密码入口。卖家平台和独立代购的订单，使用实际下单平台的账号查询。'],
    ['订单信息看收款平台','CNFansSP 是商品信息目录。目录账号和预览都无法查看其他服务的购物车、包裹与付款记录。需要售后时，按收据里的平台处理并保存该平台的订单号。']
  ]],
  ['卖家商品图与仓库 QC 照片有什么区别？','区分展示图、他人的验货图与自己订单里的验货照片。',[
    ['先确认照片对应谁的商品','卖家图展示页面上的款式。参考验货图可能属于其他订单或规格。代购仓库针对本订单出具的照片，才能用来直接核对这次收到的商品。'],
    ['看得到的细节逐项核对','核查可见标签、颜色、图案位置和外观问题。如果代购支持，可按需要要求补拍角度或测量。光照、拍摄角度和标尺位置都会影响判断，照片本身不足以确定耐用性、合身度或真伪。'],
    ['发货前确认','照片有遗漏时先看代购补拍规则和退换期限。将订单验货图和卖家网址一起保存，提交给客服时更容易核对到具体选项。']
  ]],
  ['人民币商品价怎么换算成到手成本？','把目录里的展示价与卖家、代购和运输产生的费用分开核算。',[
    ['从所选规格的商品价开始','预览按人民币显示目录价格。实际款式和购买数量可能影响小计，到卖家或代购页面确认后再记录币种和金额。'],
    ['单独计算运输和服务','列出商品小计、境内运费、代购或支付服务费和国际运输报价。实付运费可能取决于打包重量、尺寸、线路和目的地。目的地产生的费用另查承运商或当地官方说明。'],
    ['付款前再检查报价','汇率换算和运费计算器提供的是估算。对比不同代购时使用同一目的地和包裹条件，以实际收款平台的结算总额及限制为准。']
  ]],
  ['从代购下单到入仓和发货，一般怎么走？','按卖家采购、仓库收货和国际运输三步核对订单。',[
    ['采购环节','将原始商品链接和准确数量、规格提交给代购，确认平台支持这笔订单。如果卖家缺货，按代购的更换或退款流程处理。'],
    ['收货和验货环节','部分代购在入仓后提供照片和存放服务。用订单规格核对照片，确认退换期限后再批准发货。代购仓库记录应在实际下单平台查询。'],
    ['包裹出库环节','代购支持合箱时，查看哪些商品能走同一包裹和线路。用实测重量及尺寸核对报价，把包裹单号和代购订单号一起保存。']
  ]],
  ['CNFansSP 商品链接打不开怎么办？','先分别检查目录详情、卖家原页和代购入口，再判断怎么继续。',[
    ['先回到源站目录','用商品名称在 CNFansSP 搜索，或进入该品类。打开结果后用商品 ID 核对，避免仅凭名称或图片判断。'],
    ['再检查卖家链接','从目录详情打开卖家原页，确认是否提示登录、规格缺货或整条商品下架。卖家删除链接时，可用名称或分类找替代链接，并核对卖家和规格。'],
    ['最后检查代购入口','如果卖家原页能开，但代购报错，记录提示并查看代购公布的支持范围。已有订单应找收款平台，并保留订单号和卖家原址。']
  ]]
];

export function articleInLocale(guide, locale) {
  if (locale !== 'zh') return guide;
  const [title, summary, sections] = chineseGuides[articles.indexOf(guide)];
  return { ...guide, title, summary, sections };
}

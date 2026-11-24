export const editorialSources = {
  catalog: ['CNFansSP · All Products','https://www.cnfanssp.com/AllProducts/'],
  home: ['CNFansSP · About the catalogue','https://www.cnfanssp.com/#faq'],
  jersey: ['CNFansSP · Jersey-60','https://www.cnfanssp.com/AllProducts/6667.html'],
  weidian: ['Weidian · Original Jersey-60 listing','https://weidian.com/item.html?itemID=7632511460'],
  shoes: ['CNFansSP · Shoes','https://www.cnfanssp.com/shoes/'],
  register: ['CNFansSP · Registration','https://www.cnfanssp.com/reg'],
  reference: ['Kakobuy Picklist · Spreadsheet','https://kakobuypicklist.com/spreadsheet/'],
  competitor: ['CNCNFans · Spreadsheet','https://www.cncnfans.com/spreadsheet/'],
  essentials: ['CSSBuy Buying Essentials · Prices, QC and Delivery','https://cssbuys.store/faq'],
  agent: ['Superbuy · Shopping agent service','https://www.superbuy.com/en/page/shoppingagent/'],
  estimator: ['Superbuy · Shipping calculator','https://login.superbuy.com/en/page/query/freight/'],
  fees: ['Superbuy · Fee composition','https://www.superbuy.com/en/page/guide/feecomposition/']
};

// The arrays are ordered by editorial publication order, newest first.
export const guides = [
  {
    slug:'cnfanssp-spreadsheet-search', tags:['CNFans spreadsheet','CNFansSP search'], sources:['catalog','reference','competitor','jersey'],
    en:['How to search the CNFansSP spreadsheet','Start broad, narrow by category and verify the seller listing before ordering.',
      ['Search by product type first','Try one concrete term such as “jersey”, “hoodie” or “shoes”. CNFansSP’s search opens the main catalogue with that keyword. If a detailed phrase returns little, drop the colour, size or year and use the relevant category to narrow the results. Save promising listings as you go.'],
      ['Match the detail page to the seller link','Use the catalogue detail page to identify the item and its source. Jersey-60 illustrates the distinction: /AllProducts/6667.html identifies the catalogue page and 7632511460 is the identifier in the Weidian listing. Copy the link you actually want to share, particularly if you plan to paste it into an agent’s order form.'],
      ['Write down the exact variant','Once you reach the seller, record the colour, size, and any style code beside the URL. If a listing shows several options at different prices, compare identical options instead of comparing the headline figures. The seller page is where to confirm that the option you want is still selectable.']],
    zh:['怎么搜索 CNFansSP 商品目录','先用商品类型搜索，再按分类缩小范围，最后核对卖家原始页面。',
      ['先搜商品类型','可以从 jersey、hoodie 或 shoes 这类单词开始。较长的搜索词结果太少时，去掉颜色、尺码或年份，再使用主站对应分类。发现合适的商品就先保留链接。'],
      ['分清两个编号','以 Jersey-60 为例，/AllProducts/6667.html 是站内详情路径，7632511460 是微店商品 ID。发给朋友可以用详情页，提交代购时则复制代购接受的卖家链接。'],
      ['记下具体选项','把颜色、尺码和款式代码与卖家链接一起保存。有多个价位时，以同一规格比较，再到卖家页确认该规格仍然可选。']]
  },
  {
    slug:'weidian-taobao-1688-links', tags:['Weidian link','Taobao link','1688 link'], sources:['catalog','jersey','reference','competitor','agent'],
    en:['Weidian, Taobao and 1688 links explained','Identify the marketplace and verify the product URL before handing it to a shopping agent.',
      ['Open the direct seller listing','A spreadsheet URL helps you discover an item. A seller URL identifies the listing an agent can look up. Open the source link on the detail page and check the marketplace name, listing title and seller. A short or shared URL can pass through a redirect before it reaches the final page.'],
      ['Read the variant and quantity conditions','Look for size, colour, unit, and minimum purchase quantity on the listing. This is especially useful when comparing a single-item retail listing with a listing that quotes a price by quantity. Use a quote for the actual quantity you intend to order.'],
      ['Check the agent’s supported sources','A directory can cover more marketplaces than any particular agent. Use your chosen service’s own shopping instructions to confirm which link types it accepts and whether the requested items need a manual order. Before submitting, check the item ID, seller and selection in the order preview.']],
    zh:['微店、淘宝与 1688 商品链接怎么认','分清目录链接和卖家链接，再确认代购平台是否接受该来源。',
      ['打开卖家原始页面','目录用来找商品，卖家链接用来确定具体商品。点开详情页里的来源链接，核对平台、商品标题和店铺。分享短链可能要跳转后才显示完整页面。'],
      ['看清规格和数量','核对颜色、尺码、计价单位和起订条件。对照单件零售价和按数量报价的链接时，请按实际购买数量比较。'],
      ['在代购确认页复核','看代购帮助是否支持此平台以及是否需手工下单。提交前复核商品 ID、店铺和已选规格。']]
  },
  {
    slug:'warehouse-qc-photos',tags:['QC photos','warehouse quality check'],sources:['essentials','agent'],
    en:['How to review warehouse QC photos','Use inspection photos to catch visible mismatches before sending the parcel.',
      ['Confirm identity and quantity','Start with the full-item photo: check the colour, style and count against your order. For a jersey, look at the front, back, neck label and any printing requested. When one image covers several pieces, match each piece to its line item before approving shipment.'],
      ['Ask for a photo that answers one question','A measurement photo should make both ends of the tape visible. For a visible mark, request a close-up and a wider frame that shows where it sits. For a pair of shoes, ask to see both size tags if a mismatch is suspected. Check whether your agent offers these requests and what they cost.'],
      ['Decide while the parcel is still in storage','Use the agent’s order page to verify the available return or exchange action. Save the photos and record the order number and relevant dates. Photos can show condition and labels, but the material feel, long-term wear and authenticity may require other evidence.']],
    zh:['仓库 QC 验货照片怎么看','按订单逐项对照仓库图，在包裹发出前发现可见差异。',
      ['先核对商品身份和数量','把全景图与订单的颜色、款式和件数对照。球衣可依次看正面、背面、领标及约定印字。同一照片里有多件商品时，先确认每件对应哪个订单。'],
      ['补拍要能回答具体问题','尺码照要能看清尺带两端。看瑕疵时，请求一张近照和一张能指出位置的远景。补拍是否收费，以代购服务的说明为准。'],
      ['在出库前作决定','在订单页查看退换入口和期限，保留照片与订单号。照片能帮助判断外观和标识，材质手感、耐用度与真伪通常需要其他证据。']]
  },
  {
    slug:'shipping-calculator-weight',tags:['shipping calculator','volumetric weight'],sources:['estimator','fees','essentials'],
    en:['How to use an international shipping calculator','Compare delivery routes with the same parcel weight and packed dimensions.',
      ['Use a consistent parcel estimate','Enter the destination, estimated packed weight and outside dimensions in the agent’s calculator. Compare routes with the same inputs, including the same city or postal code when the calculator requests it. Record which route and currency the quote uses.'],
      ['Compare actual and volumetric weight','Some routes charge on whichever figure is higher, using a route-specific volumetric divisor or rounding rule. Bulky shoe boxes can change the billable weight even if the products themselves weigh little. When you consider removing boxes, request an estimate of the packed dimensions and verify the protection the new packing provides.'],
      ['Recheck with final warehouse measurements','Early results help with budgeting. Before payment, compare the options again using the final packed dimensions and weight. Read the breakdown for handling, packing, insurance and route-specific surcharges so that you compare like with like.']],
    zh:['国际运费计算器怎么用','用同一组包裹重量和外箱尺寸比较不同线路。',
      ['先统一输入','输入目的地、预计打包重量和外箱尺寸。线路之间使用相同邮编和数据，记下报价币种与线路名称。'],
      ['分清实重和体积重','有些线路按较高的一项计费，体积重除数和进位规则由线路决定。鞋盒可能显著增加体积。考虑去盒时，同时确认新的外箱尺寸和保护方式。'],
      ['发前用实测值再算','仓库打包完成后，用最终重量和尺寸重新比较。逐项查看包装、保险、服务费和线路附加费用。']]
  },
  {
    slug:'product-price-total-cost',tags:['product price','total landed cost','domestic shipping'],sources:['essentials','fees','estimator','weidian'],
    en:['From product price to total delivered cost','Build a cost estimate that distinguishes product, warehouse and international charges.',
      ['Record the price of the selected option','Capture the seller price for the exact size or colour and the quantity you intend to buy. Add domestic delivery to the warehouse when shown. If an agent quotes a different amount, check the option, currency and included fees before assuming the prices are comparable.'],
      ['Keep parcel charges separate','For a multi-item parcel, track the parcel charge separately from each product subtotal. Record international freight and any selected packing or insurance. When comparing two products that could use different box sizes, compare the expected parcel totals as well as their item prices.'],
      ['Keep a range until the order is priced','A working budget can use a low and high freight estimate based on two plausible box sizes. Recalculate once the agent provides packed measurements and current checkout line items. Destination-specific charges may follow separate rules, so use the applicable carrier and customs information when estimating them.']],
    zh:['如何从商品标价估算到手总成本','按商品、国内运输和国际包裹三个阶段核对费用。',
      ['记录所选规格价格','保存选中颜色、尺码与数量的卖家报价，另记送仓国内运费。代购报价与卖家价不同，先检查规格、币种和所含费用。'],
      ['包裹费用单独计算','国际运输、额外包装和保险通常按包裹核算。对比商品时也比较预计打包方案，因为箱子大小会影响最终运费。'],
      ['最终结算前再计算','预算阶段可用两组合理外箱尺寸估出区间，拿到仓库实测和订单明细后更新。目的地收费按当地规定和承运方规则另外核实。']]
  },
  {
    slug:'jersey-size-chart',tags:['jersey size chart','Jersey-60','football jerseys'],sources:['jersey','weidian','essentials'],
    en:['How to read a jersey size chart','Compare garment measurements and confirm custom lettering before ordering.',
      ['Measure a jersey you already wear','Lay it flat and note its chest width and back length. Compare those numbers to the seller chart in the same unit. A 52 cm flat chest width corresponds to roughly 104 cm around the garment; treat those as different chart fields. Use the seller’s measuring instructions if they specify a different method.'],
      ['Confirm cut, variant and printing','Check whether the selected listing has multiple cuts or size charts. Use the chart that applies to the chosen option. If the seller offers custom printing, confirm the exact name, number, placement and any additional charge or change restrictions before submitting. For Jersey-60, the seller directs custom jersey questions to the listing details.'],
      ['Plan the warehouse check','If measurements affect your decision, request photos showing the measurement points while the item is at the warehouse. Also compare the requested print to the visible front and back before the parcel is submitted.']],
    zh:['球衣尺码表怎么看','先比成衣实测，再确认版型和定制印字。',
      ['拿一件合身球衣量一量','平铺后量胸宽和后衣长，用同样单位对照卖家尺码表。平铺胸宽 52 厘米约等于成衣胸围 104 厘米，不能混用。'],
      ['确认规格和印字','有不同版型时，选择与所购规格匹配的尺码表。定制前核对名字、号码、位置、费用及修改限制。Jersey-60 卖家把定制说明放在原商品详情里。'],
      ['到仓后检查','需要复核尺寸时，确认照片展示正确测量点。发货前用正反面照片检查印字是否与订单一致。']]
  },
  {
    slug:'shoe-size-chart',tags:['shoe size chart','sneaker spreadsheet','EU shoe sizes'],sources:['shoes','essentials'],
    en:['How to compare shoe sizes from a spreadsheet','Use measurements and the seller’s chart when product labels use different systems.',
      ['Identify the measurement being quoted','Measure both feet in the type of socks you expect to wear. Record the longer foot and compare it with the seller’s recommendation for foot length. When a chart gives insole length instead, ask how it was measured and compare to a well-fitting insole if you can measure it the same way. An outsole measurement serves a different purpose.'],
      ['Check the chosen style’s chart','An EU, US or UK tag can be a starting point. Confirm whether the seller chart covers the selected style, and ask the seller about width or alternate sizes when the numbers are close. Save the chart beside the URL and model colour so you can match the warehouse arrival to the correct order.'],
      ['Check both shoes before dispatch','If the warehouse offers extra photos, request both size labels and one top view of the pair. Compare the tags with the ordered size and use the agent’s order page to raise a visible mismatch.']],
    zh:['鞋子尺码怎么核对','使用卖家尺码表对应的测量方式，避免只看欧码和美码标签。',
      ['先分清脚长和鞋垫长','穿预计搭配的袜子量双脚，记录较长一只。看卖家用的是脚长、鞋垫长还是外底长，比较时使用同一种测量方式。'],
      ['核对具体款式','同一商品页可能有不同鞋型和尺码表。保存所选配色的链接和尺码表，处在两码之间时向卖家确认鞋宽和建议尺码。'],
      ['检查两只鞋的尺码标','代购支持补拍时，可请求左右鞋尺码标和一张俯视图。看到标签不符时，用订单页的售后渠道联系处理。']]
  },
  {
    slug:'warehouse-parcel-submission',tags:['submit parcel','warehouse packing','parcel consolidation'],sources:['agent','estimator','essentials'],
    en:['From warehouse arrival to parcel submission','Confirm inspection, packing and the shipping route in the order you can act on them.',
      ['Review each warehouse item','Match each warehouse record to a seller order and check the photos. Resolve visible discrepancies before placing that item into a parcel. If you intend to consolidate, keep track of which items have arrived and which are still within a usable storage period.'],
      ['Select packing for the contents','Choose protection based on the actual products. A flat garment and a pair of shoes may need different packing. Ask for the estimated effect of optional packing on dimensions if you are choosing between routes or watching a weight threshold.'],
      ['Check route eligibility and final figures','Use the shipping calculator with the packed dimensions and relevant item types. Review the route’s acceptance rules and the checkout breakdown before submitting. Save the parcel reference and track updates from the agent or carrier after dispatch.']],
    zh:['从仓库签收到提交国际包裹','按验货、包装和运输线路的顺序处理。',
      ['逐件复核入库记录','把各入库记录和卖家订单对应起来，再核对仓库图。有规格差异先处理。需要合箱时，记下已到货商品及各自仓储期限。'],
      ['按商品选择包装','衣物和鞋子需要的防护不同。可选包装会影响外箱尺寸，接近线路重量门槛时，可先请仓库估算。'],
      ['发前确认线路和数据','使用打包后的尺寸、重量及商品类型核对线路可寄条件和费用。提交后保存包裹编号，以便追踪。']]
  },
  {
    slug:'returns-exchanges-warehouse',tags:['shopping agent returns','warehouse returns','exchange'],sources:['essentials','agent'],
    en:['How to handle warehouse returns and exchanges','Collect the evidence and use the seller or agent’s applicable order process.',
      ['Identify who handled payment','For a direct marketplace order, use the relevant seller or marketplace order page. For an agent order, read the agent’s process first, since that agent may need to contact the seller. Keep the order number, variant and a clear description in one record.'],
      ['Document the issue and check the window','Attach a warehouse photo that shows the mismatch and the variant selected at checkout. Record when the item arrived and check whether the order offers a return or exchange action, any seller conditions and the applicable last date. Storage time and return eligibility are separate terms.'],
      ['Confirm the cost and preferred outcome','State whether you want a replacement, a different size or a refund, and ask who pays any domestic return postage. If a return decision is pending, check with the agent before including the item in an international parcel.']],
    zh:['仓库商品退换怎么处理','按实际下单渠道提交证据，及时核对退换期限。',
      ['确认由谁下单','直购到对应平台的订单页处理，经代购下单则先查代购流程。整理订单号、规格和问题描述。'],
      ['准备证据并核对期限','保存能看清差异的仓库图和原订单选项，确认到货日期、可申请动作以及截止时间。仓储期限和退换期限分别核对。'],
      ['确定费用和期望结果','写清要补发、换码还是退款，并确认国内退运费由谁承担。处理中的商品发国际件前先向代购问清。']]
  },
  {
    slug:'choosing-shopping-agent',tags:['shopping agent comparison','CNFans alternatives','Weidian shopping agent'],sources:['reference','competitor','agent','estimator'],
    en:['How to compare shopping agents for one product link','Use a repeatable comparison of supported links, warehouse checks and destination routes.',
      ['Start with link acceptance','Use the same original seller URL and variant with each service. Confirm it accepts the marketplace and item type. For current availability and restrictions, consult the service’s live help or order screen. Comparative directories can help you discover candidates.'],
      ['Compare the warehouse steps you will use','Ask whether the service provides the inspection views, measurements or packing options relevant to your item. Record which options are included and which require payment. Check the seller-contact and return process before sending money for an item that may need a size exchange.'],
      ['Compare the same packed parcel','Enter the same destination and estimates into each calculator. Record the route, price, parcel limits and any separate handling charges. Rank the options by the conditions that matter for this purchase, such as measured packing, a specific delivery route or support for return requests.']],
    zh:['同一个商品链接怎么比较代购平台','用相同链接、规格和包裹数据比较代购服务。',
      ['先核对商品能否提交','在各平台使用同一个卖家链接和规格，确认支持来源和商品类型。平台实时状态和限制以当时的服务页或下单页为准。'],
      ['按所需仓库服务比较','记录需要的验货角度、尺码实拍、包装服务以及收费。商品可能要换码时，事先了解退换如何联系卖家。'],
      ['用相同数据算运费','各计算器填写相同目的地、预计实重和外箱尺寸，再对照线路限制、运费和单列费用，按实际需求选平台。']]
  }
];

export const faqs = [
  ['find-jersey-60','How do I find Jersey-60?','Open CNFansSP’s Jersey-60 detail page. Its original Weidian listing uses item ID 7632511460.','怎么找到 Jersey-60？','打开 CNFansSP 的 Jersey-60 详情页，原微店商品 ID 是 7632511460。','jersey'],
  ['catalogue-search','Where does the search button take me?','It opens the main CNFansSP search results with the keyword you entered. Try “jersey” or “shoes” to check it.','点搜索会打开哪里？','会在 CNFansSP 主站打开你输入关键词的搜索结果，可以试试 jersey 或 shoes。','catalog'],
  ['price-difference','Why can a seller price differ from the catalogue?','Check the selected colour, size and quantity on the original listing. Verify domestic delivery and service fees separately.','为什么卖家价格和目录会不同？','请在原商品页核对颜色、尺码和数量，再单独核对国内运费和服务费。','essentials'],
  ['catalogue-purpose','What is CNFansSP?','CNFansSP indexes products and links to their shopping sources. Use the seller or the chosen agent for an actual order.','CNFansSP 是什么？','CNFansSP 整理商品及相关来源链接，下单在卖家或你选择的代购平台完成。','home'],
  ['register','Where can I register for CNFansSP?','The Register button opens the CNFansSP registration form on the main site.','在哪里注册 CNFansSP？','顶部注册按钮会打开 CNFansSP 主站的注册表单。','register'],
  ['category-links','Where do the category links go?','Each link opens the same category on CNFansSP, such as Shoes or Jerseys.','分类链接打开哪里？','每个分类打开 CNFansSP 主站相应页面，例如鞋子或球衣。','catalog'],
  ['product-card','Where do product cards go?','They open source product details on CNFansSP. Look for the original marketplace link there.','点商品卡片去哪里？','会进入 CNFansSP 主站商品详情，原平台链接可在详情里查找。','jersey'],
  ['different-ids','Why are there two product numbers?','The number in the CNFansSP page path identifies the catalogue entry. The seller item ID identifies the listing on the marketplace.','为何有两个商品编号？','站内路径的编号对应目录条目，卖家 ID 对应原购物平台的商品。','jersey'],
  ['marketplace','How can I tell which marketplace a link uses?','Open it and check the final domain and store listing. The Jersey-60 detail page labels its original URL as a Weidian link.','怎么看链接属于哪个购物平台？','打开后核对最终域名和店铺页面。Jersey-60 的详情将原链接标记为微店。','jersey'],
  ['out-of-stock','Where should I check if a variant is available?','Check the original listing for the exact option. If you plan to use an agent, verify the same option in that agent’s order flow.','在哪里看某个规格还有没有货？','请到原商品页查看所选规格。使用代购时也在代购下单页核对一次。','agent'],
  ['min-order','Where can I check a minimum order quantity?','Read the quantity selector and seller terms for the exact option before comparing prices or requesting an agent quote.','怎么查起订量？','先在卖家页查看所选款式的数量选项和卖家条款，再比价或询问代购报价。','agent'],
  ['measure-jersey','How should I compare jersey sizes?','Measure the chest width and length of a jersey you wear and compare these with the seller’s chart using the same method.','球衣尺码怎么比较？','取一件合身球衣量胸宽和衣长，并用与卖家尺码表相同的测量方法对照。','essentials'],
  ['shoe-insole','Is insole length the same as foot length?','They measure different things. Use the input the seller chart calls for and ask about the method if the chart is unclear.','鞋垫长等于脚长吗？','两者测量对象不同。使用卖家尺码表要求的数值，表述不明时向卖家核实。','essentials'],
  ['custom-print','Where do I check custom jersey printing?','Use the original Weidian listing. Confirm the wording, number and price with the seller before placing an order.','在哪里确认定制球衣印字？','查看微店原商品页，下单前请向卖家确认文字、号码和价格。','weidian'],
  ['qc-photos','What can warehouse QC photos show?','Photos can show visible condition, labels, colour, quantity and photographed measurements. Match these to the order details.','仓库 QC 图能看什么？','可核对可见外观、标识、颜色、数量和照片中的尺寸，并与订单规格对照。','essentials'],
  ['extra-qc','Can I ask the warehouse for extra photos?','Check the agent’s inspection services for the angles or measurements you need and any additional charge.','可以要求仓库补拍吗？','查代购验货服务是否支持指定角度和测量，并确认是否额外收费。','agent'],
  ['fees','Does the product price include international freight?','For an agent order, read the checkout breakdown. Product price and international parcel freight are usually quoted at different stages.','商品价格含国际运费吗？','看代购结算明细，商品价和国际包裹运费通常分阶段报价。','fees'],
  ['shipping-estimate','What do I need for a shipping estimate?','Use the destination and packed weight. Enter the outside box dimensions if the route calculator asks for them.','查运费需要提供什么？','准备目的地和打包后重量，计算器需要时填写外箱尺寸。','estimator'],
  ['volume-weight','What is volumetric weight?','It converts box dimensions into a weight figure for billing. The route’s rules determine the divisor, rounding and whether it applies.','什么是体积重？','它把外箱尺寸折算成计费重量。除数、进位和是否适用以线路规则为准。','fees'],
  ['combine-items','What should I check before combining items?','Make sure the items have arrived, cleared inspection and qualify for the route when shipped together.','合箱之前要确认什么？','确认商品都已入库、已完成验货，并可通过同一线路一起寄出。','agent'],
  ['storage-return','Does warehouse storage extend the return deadline?','Check the seller and agent return conditions and the action available on the order. Storage and return eligibility follow separate terms.','仓储期限会延长退货期限吗？','请分别查卖家和代购的退货条件，以及订单可用的操作。仓储和可退期限按不同条款核算。','essentials'],
  ['tracking','Where do I track an international parcel?','Use the parcel record from the agent or the tracking number the chosen carrier provides.','在哪里查国际物流？','在代购平台查包裹记录，或用承运方给的运单号查物流。','agent'],
  ['restricted','Where do I check route restrictions?','Use the agent’s current calculator or shipping rules and confirm eligibility for the destination and product type.','在哪里查禁寄限制？','查代购平台当前的运费计算器或线路规则，并按目的地与商品类型确认能否寄送。','estimator']
];

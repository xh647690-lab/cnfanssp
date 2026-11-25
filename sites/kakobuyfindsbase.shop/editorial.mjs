export const editorialSources = {
  process: ['Kakobuy · About us', 'https://www.kakobuy.com/help/about-us'],
  qc: ['KakoBuy Help · Warehouse photo guide', 'https://kakobuy.help/guide'],
  fees: ['Kakobuy · Cost breakdown', 'https://www.kakobuy.com/service/help/question?cid=35&id=74'],
  picklist: ['Kakosheet · Spreadsheet workflow', 'https://kakosheet.com/how-to-use/'],
  listing: ['CNFansSP · Example listing with Kakobuy purchase link', 'https://www.cnfanssp.com/AllProducts/6667.html']
};

export const guides = [
  {
    slug: 'how-to-buy-on-kakobuy', sources: ['process', 'picklist', 'listing'],
    en: ['How to buy on Kakobuy', 'From a spreadsheet listing to an international parcel.',
      ['Find the seller listing', 'Search the spreadsheet by product type, open a result and copy the original seller URL. Check the selected size, colour and price before placing the order.'],
      ['Submit the link to Kakobuy', 'Paste the seller URL into Kakobuy. Select the variant and quantity listed by the seller and review the order before payment. The seller ships the item to the Kakobuy warehouse in China.'],
      ['Review before shipping', 'Once the item arrives, review the warehouse inspection. Select the warehouse items you want to ship, review the available logistics options and submit your parcel.']],
    zh: ['Kakobuy 怎么买', '从目录选品，到仓库验货和提交国际包裹。',
      ['找到卖家原链接', '按商品类型搜索目录，打开详情后复制卖家链接。下单前核对尺码、颜色和所选规格的价格。'],
      ['到 Kakobuy 提交订单', '把卖家链接粘贴到 Kakobuy，选择规格和数量，付款前核对订单。卖家会先寄到 Kakobuy 中国仓库。'],
      ['验货后选择国际物流', '商品入库后查看验货信息，选中要发运的仓库商品，核对可用线路后提交包裹。']]
  },
  {
    slug: 'kakobuy-shipping-cost', sources: ['fees', 'process'],
    en: ['Kakobuy shipping cost explained', 'Work out which charges belong to the item and which belong to the parcel.',
      ['Separate the two shipping charges', 'Domestic freight covers the route from the seller to the Chinese warehouse. International freight covers delivery from that warehouse to your destination.'],
      ['Compare shipping estimates on the same inputs', 'Use the same destination, parcel weight and shipping method when comparing quotes. Kakobuy also lists packaging and optional paid services as separate cost components.'],
      ['Confirm the price before submitting', 'Use the estimate for planning. Review the charges shown for the selected items, packaging and logistics method on the parcel submission screen.']],
    zh: ['Kakobuy 运费怎么算', '区分卖家国内运费、国际运费和打包费用。',
      ['分清两段运费', '国内运费是卖家寄到中国仓库的费用。国际运费是中国仓库寄往收件地址的费用。'],
      ['用相同条件比较预估运费', '比较报价时使用相同的目的地、包裹重量和运输方式。Kakobuy 还列出了打包及可选增值服务费用。'],
      ['提交前核对账单', '预估可以用来做预算。提交包裹时，核对所选商品、打包和运输方案实际显示的收费。']]
  },
  {
    slug: 'kakobuy-qc-photos', sources: ['process', 'qc'],
    en: ['How to review Kakobuy QC photos', 'Check the warehouse inspection against the variant you ordered.',
      ['Start with the order details', 'Keep the seller listing and order details nearby. Compare the colour, size label and selected variant with the warehouse inspection.'],
      ['Check visible details', 'Look at seams, printed details and any obvious marks. If a required measurement or angle is missing, ask support about your options for the item.'],
      ['Resolve discrepancies while the item is in the warehouse', 'If something appears wrong, keep the order number and relevant photos handy and contact support before including the item in a parcel.']],
    zh: ['怎么看 Kakobuy QC 验货图', '用下单记录逐项核对仓库验货信息。',
      ['先对照下单记录', '打开卖家商品和订单详情，核对颜色、尺码标签与实际所选规格。'],
      ['检查可见细节', '查看走线、印花和明显痕迹。如果关键尺寸或角度缺失，联系客服询问该商品可用的处理方式。'],
      ['仓库发货前处理异常', '发现异常时保留订单号和相关图片，在把商品加入国际包裹之前联系客服。']]
  }
];

export const faqs = [
  ['how-to-buy', 'How do I buy on Kakobuy?', 'Paste the original seller link into Kakobuy, select the variant and place the order. Review the warehouse inspection before submitting a parcel.', 'Kakobuy 怎么下单？', '粘贴卖家原链接，选好规格并提交订单。入库后查看验货信息，再提交包裹。', 'process'],
  ['shipping-cost', 'How is Kakobuy shipping calculated?', 'International shipping depends on the parcel weight, shipping method and destination. Domestic freight, packaging and optional services can add to the total.', 'Kakobuy 运费怎么算？', '国际运费取决于重量、运输方式和目的地。总价还可能包括国内运费、包装和可选服务。', 'fees'],
  ['qc-photos', 'When can I check Kakobuy QC photos?', 'Review the warehouse inspection after the seller’s parcel arrives at the Kakobuy warehouse and before submitting international shipping.', '什么时候能看 Kakobuy 验货图？', '卖家包裹到仓后，国际发运前，可以查看仓库验货信息。', 'process'],
  ['weidian', 'Where do I verify the seller behind a Kakobuy catalogue item?', 'Open the marketplace link on the catalogue detail page. Compare its item ID and seller name with the listing you intend to order.', '在哪里核对 Kakobuy 目录商品的原卖家？', '在目录详情页打开原平台链接，比对商品 ID 和卖家名称，确认对应想买的商品。', 'listing'],
  ['consolidation', 'Can I combine orders in one Kakobuy parcel?', 'Kakobuy lets you choose items in the warehouse and submit them together as one parcel.', 'Kakobuy 可以合箱吗？', '可以从仓库选择要寄出的商品，将它们放在同一个包裹内提交。', 'process'],
  ['two-shipping-charges', 'Why are there two shipping charges?', 'Domestic freight covers the seller-to-warehouse trip. International freight covers the warehouse-to-destination trip.', '为什么会有两段运费？', '国内运费对应卖家到仓库，国际运费对应仓库到收件地。', 'fees']
];

Object.assign(editorialSources, {
  ordering: ['Kakobuy Select · Ordering walkthrough', 'https://www.kakobuyselect.com/guide'],
  topics: ['Kakobuy Help · Buying and shipping guides', 'https://kakobuy.help/guide'],
  import: ['Kakobuy Spreadsheet · Marketplace link import', 'https://kakobuysperdsheet.com/kakobuy-spreadsheet-news/kakobuy-link-import-ordering-guide-2026'],
  storage: ['Kakobuy Help · Warehouse and consolidation', 'https://kakobuy.help/guide/warehouse-storage'],
  tracking: ['Kakobuy Discount · Shipping and tracking guide', 'https://www.kakobuydiscount.com/guides/kakobuy-shipping'],
  signup: ['Kakobuy · Official registration', 'https://www.kakobuy.com/register']
});

guides.unshift(
  {
    slug: 'kakobuy-weidian-taobao-1688-links', sources: ['import', 'listing'],
    en: ['How to open Weidian, Taobao and 1688 links in Kakobuy', 'Recover the seller listing, import it into Kakobuy and check that the right item and variant loaded.',
      ['Start from the listing itself', 'Copy the address of the individual product. A storefront, image album or search results page can contain several products, so preserve the URL for the exact item. If you only have a share link, open it first and check where it lands.'],
      ['Match the imported options', 'Compare the seller photo, colour, size and quantity with the Kakobuy page. On a 1688 listing, check whether the price depends on the quantity and whether the seller sets a minimum order.'],
      ['If the link fails to load', 'Open the original seller page again. If it still works, try its full product URL or ask Kakobuy support whether it can handle that listing. If the seller page is gone or the variant cannot be identified, find another listing before paying.']],
    zh: ['微店、淘宝和 1688 链接怎么导入 Kakobuy', '先找到卖家原商品页，再检查 Kakobuy 是否加载了正确的商品和规格。',
      ['取得单件商品链接', '复制具体商品页的地址。店铺首页、图片相册和搜索结果可能包含多个商品。手里只有分享短链时，先打开并核对它最终指向的页面。'],
      ['核对导入后的选项', '对照卖家原页确认图片、颜色、尺码和数量。遇到 1688 商品，再看报价是否随数量变化，以及卖家是否设了起订量。'],
      ['处理加载失败', '重开原页。如果还能访问，可换用完整商品 URL，或问 Kakobuy 客服能否处理。商品已下架或规格无法确认时，先找其他链接再付款。']]
  },
  {
    slug: 'kakobuy-size-chart-order-notes', sources: ['topics', 'ordering'],
    en: ['Kakobuy size charts and order notes', 'Turn a seller’s size chart into a clear variant choice and a useful order note.',
      ['Measure a garment that already fits', 'Lay it flat and measure the same points shown in the chart. For a jersey, start with the width across the chest and the length from the shoulder. Check whether the seller gives a flat width or a full circumference before comparing figures.'],
      ['Put the exact option in the order', 'Choose the size and colour in the listing. If the seller uses similar names, copy the original option text into the note and identify the detail that distinguishes it. A sample note is “Black, size L, plain back. Please confirm the back has no lettering.”'],
      ['Check the size again at the warehouse', 'Compare the ordered size with the visible tag. If the deciding measurement is absent, ask whether an extra photo with a tape measure is available before including the item in a parcel.']],
    zh: ['Kakobuy 尺码表怎么看，订单备注怎么写', '用现有衣服对照卖家尺码，把选好的规格写清楚。',
      ['量一件合身衣服', '平铺衣服，按卖家尺码图的测量位置对照。球衣可先看腋下胸宽和肩部到下摆的衣长，分清卖家写的是平铺宽度还是整圈胸围。'],
      ['把选项写进订单', '先在商品页选颜色和尺码。如果选项名称接近，把卖家的原选项名粘进备注，再写明区别。例如「黑色 L 码，背面无印字，请确认」。'],
      ['入库后再次核对', '对照下单尺码和验货图里的尺码标签。关键尺寸缺失时，在加入包裹前询问能否补拍卷尺测量图。']]
  },
  {
    slug: 'kakobuy-warehouse-consolidation', sources: ['storage', 'topics', 'fees'],
    en: ['Kakobuy warehouse storage and parcel consolidation', 'Decide which warehouse items should ship together and when a separate parcel makes sense.',
      ['Check each item before grouping it', 'Make a list of the items already received. Review their QC, note any unresolved return and look up the storage information shown for each order. An item that is still in domestic transit needs a separate decision about whether to wait.'],
      ['Compare packing scenarios', 'Group items that can use the same shipping line. Compare a combined parcel with splitting bulky items into a separate parcel. Compare estimated parcel totals with the same destination and packaging needs, since dimensions can change the charged weight.'],
      ['Confirm the final selection', 'Before submission, check the recipient address, item quantities and packaging choices. Keep the parcel number and the list of items it contains so you can match international tracking to the right order.']],
    zh: ['Kakobuy 仓库存放与合箱指南', '先判断哪些仓库商品适合一起寄，再决定是否拆包。',
      ['逐件核对仓库商品', '列出已经入库的商品，检查验货结果、待处理售后以及订单页面显示的存放信息。仍在国内运输的订单，单独判断是否值得等到齐货。'],
      ['比较不同打包方案', '优先组合可以使用同一线路的商品。将体积较大的商品单独成包，再和合箱方案比较。目的地和包装需求要一致，因为箱子尺寸会影响部分线路的计费重量。'],
      ['提交前确认清单', '检查收件地址、商品数量和包装选项。保存包裹编号以及包内商品清单，方便之后核对国际物流。']]
  },
  {
    slug: 'kakobuy-shipping-lines', sources: ['fees', 'topics', 'tracking'],
    en: ['How to compare Kakobuy shipping lines', 'Compare live options by eligibility, billed weight, price and tracking coverage.',
      ['Check eligibility first', 'Enter the destination and the parcel information requested by Kakobuy. Read the selected line’s restrictions against the items and dimensions in your parcel. Compare only the services shown as available for that shipment.'],
      ['Use the same parcel for each quote', 'Keep item selection and packaging fixed while comparing quotes. Check how each line treats actual and volumetric weight. If you change the packing, recalculate the quote before comparing again.'],
      ['Read the handoff and coverage details', 'Review the estimated delivery window, tracking coverage and any insurance terms the line displays. Save the selected line and quote details before submission, and use the live checkout total for your final decision.']],
    zh: ['Kakobuy 国际物流线路怎么选', '按可用资格、计费重量、报价和跟踪覆盖范围比较线路。',
      ['先确认能不能寄', '填写 Kakobuy 要求的目的地和包裹信息，把线路限制与商品和箱子尺寸逐项核对。只比较当前这件包裹可以选的服务。'],
      ['用同一份包裹信息比价', '固定商品和打包方式，分别看各线路如何使用实重和体积重。换包装后重新报价，再做比较。'],
      ['看清时效与跟踪范围', '查看线路显示的预计时效、可跟踪范围以及适用的保险条款。提交前保存所选线路和报价，最终以实际结算页面为准。']]
  },
  {
    slug: 'kakobuy-tracking-order-status', sources: ['ordering', 'tracking'],
    en: ['Kakobuy tracking and order status explained', 'Find the right number for the seller-to-warehouse or warehouse-to-recipient stage.',
      ['Before warehouse arrival', 'Look up the item order first. A domestic carrier update concerns the seller’s shipment inside China. If the carrier shows delivery but the item does not appear in the warehouse, keep the domestic tracking number for support.'],
      ['After parcel submission', 'Open the international parcel record and copy its tracking number. A newly assigned number can exist before the first carrier scan. Use the tracking service named for your line and compare the last dated event.'],
      ['When you need help', 'Send support the order or parcel number, the relevant tracking number and the last dated event. If the parcel splits or changes carriers, check whether the parcel record provides another number for the next leg.']],
    zh: ['Kakobuy 物流查询与订单状态', '先区分国内段和国际段，再用正确的单号查询。',
      ['商品还没入库时', '先看商品订单。国内物流更新指卖家在中国境内寄往仓库的包裹。物流显示签收但仓库尚未出现该商品时，保存国内单号，方便联系客服核查。'],
      ['提交国际包裹后', '在国际包裹记录里复制跟踪号。单号生成时承运商可能还未完成首次扫描。用所选线路提供的查询渠道，查看最后一条带日期的记录。'],
      ['需要客服协助时', '提交订单或包裹编号、对应运单号以及最后一次更新的时间和状态。包裹拆分或更换承运商时，检查记录里是否有下一程的单号。']]
  },
  {
    slug: 'kakobuy-return-exchange-after-qc', sources: ['topics', 'storage'],
    en: ['Kakobuy returns and exchanges after warehouse QC', 'Document a discrepancy and check the options before shipping internationally.',
      ['Record what differs', 'Compare the order confirmation, original listing and QC photos. Mark the exact discrepancy, such as the tag showing M when the order says L. Include the order ID and the clearest image in the request.'],
      ['Ask for the applicable options', 'Keep the item out of your parcel while you contact Kakobuy. Confirm whether the seller accepts a return or exchange, when the request must be made and who pays any domestic return freight. Check these terms against the specific order.'],
      ['Act after you receive an update', 'For an exchange, review the replacement’s warehouse record and confirm the original problem is resolved. For a return, track the request in the order record and verify the credited amount once the platform reports completion.']],
    zh: ['Kakobuy 验货发现问题后怎么退换', '先记录差异，在国际发货之前核对这笔订单可用的售后选项。',
      ['保留具体问题证据', '对照下单确认、卖家原页和仓库验货图，标明具体差异。例如订单选 L 码，照片标签却是 M。联系时附上订单号和清晰图片。'],
      ['确认订单适用的处理方式', '先把商品留在仓库，再联系 Kakobuy。确认卖家是否接受退换、最晚申请时间和国内退货运费由谁承担。以这笔订单的答复为准。'],
      ['收到处理结果再继续', '换货后检查新一批验货记录，确认原问题已解决。退货则在订单里跟踪进度，平台显示完成后核对退回金额。']]
  },
  {
    slug: 'kakobuy-spreadsheet-live-price-check', sources: ['picklist', 'listing', 'fees'],
    en: ['Kakobuy Spreadsheet price and stock checklist', 'Use the catalogue to shortlist items and verify the exact option before ordering.',
      ['Keep a record of the listing', 'Copy the marketplace URL, the variant you want and the date you checked it. Two similar catalogue photos can lead to different sellers, so verify the product link before comparing prices.'],
      ['Check the selected variant', 'Change the size or colour to the option you intend to order and check its price and availability. For example, on the linked Jersey-60 catalogue page, open the Kakobuy link and compare its current options with the reference entry.'],
      ['Compare costs at the same stage', 'First compare item prices and seller-to-warehouse freight. Add international shipping when you can estimate a parcel with the same destination and packing assumptions. Confirm the actual amounts on the order and parcel screens.']],
    zh: ['Kakobuy 选品表怎样核对实时价格和库存', '用目录筛选商品，下单前再确认具体规格的价格和库存。',
      ['记下商品链接和检查日期', '记录卖家原链接、想买的规格和检查日期。相似的商品图可能来自不同卖家，因此比价前先核对链接。'],
      ['按实际选中的规格检查', '切换到要买的颜色或尺码，再看价格是否变化、该规格是否可选。例如从所附的 Jersey-60 目录条目打开 Kakobuy，对照当前页面的商品选项。'],
      ['按同一阶段的费用比价', '先比较商品价和国内运费。等可以用相同的目的地和包装条件估算包裹时，再加上国际运费。最终金额看订单和包裹页面。']]
  }
);

faqs.unshift(
  ['import-url', 'How do I open a Weidian link in Kakobuy?', 'Copy the full seller product address, paste it into Kakobuy and compare the loaded item and variants with the seller page.', '微店链接怎么在 Kakobuy 打开？', '复制完整的卖家商品地址，粘贴到 Kakobuy，再和卖家页面核对商品及规格。', 'import'],
  ['choose-size', 'How do I choose a size on Kakobuy?', 'Compare the seller’s chart with a well-fitting garment, using the same measurement points and units. Select the exact variant before paying.', 'Kakobuy 怎么选尺码？', '用一件合身衣服对照卖家的尺码表，确保测量位置和单位一致。付款前选中确切规格。', 'topics'],
  ['track-parcel', 'Where do I find my Kakobuy tracking number?', 'Open the international parcel record for the number and the tracking route. If the item is still on its way to the warehouse, check the domestic shipping information in the item order.', '在哪里看 Kakobuy 物流单号？', '在国际包裹记录找单号和查询渠道。商品仍在寄往仓库时，先看商品订单里的国内物流。', 'tracking'],
  ['register', 'Where do I register for Kakobuy?', 'Use the registration page on kakobuy.com and follow the prompts shown by Kakobuy.', '在哪里注册 Kakobuy？', '打开 kakobuy.com 的注册页面，按页面提示操作。', 'signup'],
  ['taobao-link', 'Can I paste a Taobao link into Kakobuy?', 'Use the URL for the individual listing and check that the imported photo and product options match it.', '淘宝链接能导入 Kakobuy 吗？', '使用单件商品链接，导入后核对图片和可选规格。', 'import'],
  ['1688-minimum', 'What should I check on a 1688 listing?', 'Check minimum quantity, quantity-based price and whether the chosen variant is available at the quantity you want.', '导入 1688 商品要检查什么？', '看起订量、阶梯价格和想买的规格在该数量下是否可选。', 'import'],
  ['failed-link', 'Why might a Kakobuy product link fail to load?', 'A share link may resolve to a shop or an old listing. Open it in the original marketplace first, then try the full item URL.', '为什么 Kakobuy 商品链接打不开？', '分享链接可能指向店铺或旧商品。先在原平台打开它，再用完整的商品页 URL 尝试。', 'import'],
  ['variant-price', 'Why did the Kakobuy price change after selecting a variant?', 'A listing can price sizes, colours or versions differently. Compare the figures with the same variant and quantity selected.', '为什么 Kakobuy 选了规格后价格变了？', '卖家可以给不同尺码、颜色或版本设置不同价格。比价时选中相同规格和数量。', 'ordering'],
  ['order-note', 'What should I put in a Kakobuy order note?', 'Use the seller’s option name and specify the difference that matters, such as plain back, black, size L.', 'Kakobuy 订单备注写什么？', '写入卖家选项原名，再注明关键区别，例如黑色 L 码、背面无印字。', 'topics'],
  ['seller-sent', 'What does a seller shipment update tell me?', 'It concerns shipping to the warehouse. Use the item order to check whether the warehouse has received it and inspection is available.', '卖家已发货代表什么？', '这是卖家寄往仓库的物流阶段。在商品订单里查看是否已经入库并可以验货。', 'ordering'],
  ['extra-photo', 'Can I ask about extra Kakobuy QC photos?', 'Check the warehouse record or ask support whether an extra photo is available. Specify the angle or measurement you need.', 'Kakobuy 能补拍验货图吗？', '查看仓库记录或联系客服确认能否补拍，并写明所需角度或尺寸。', 'topics'],
  ['wrong-item', 'What should I do if Kakobuy QC shows the wrong item?', 'Keep it out of your outgoing parcel and contact support with the order number, requested variant and a relevant warehouse photo.', 'Kakobuy 验货发现发错商品怎么办？', '先别把它加入国际包裹，联系支持时提供订单号、所选规格和相关验货照片。', 'topics'],
  ['returns', 'Can I return or exchange a Kakobuy warehouse item?', 'Ask Kakobuy to check the specific seller’s terms, deadline and domestic freight before including the item in a parcel.', 'Kakobuy 入库商品可以退换吗？', '发国际包裹前，让 Kakobuy 核对卖家退换条件、申请时限和国内运费。', 'topics'],
  ['storage-period', 'Where can I check Kakobuy warehouse storage?', 'Check the storage information shown for the specific item in your account before deciding to wait for other orders.', '在哪里看 Kakobuy 仓库存放信息？', '在账号里查看具体商品的存放信息，再决定是否等其他订单到齐。', 'storage'],
  ['billed-weight', 'What is volumetric weight on Kakobuy?', 'It is a weight estimate based on packed dimensions. Review the selected line’s rules to see how it affects the charge.', 'Kakobuy 的体积重是什么意思？', '体积重按打包后的箱子尺寸计算。查看所选线路的规则，了解它如何影响计费。', 'topics'],
  ['ship-line', 'Which Kakobuy shipping line should I choose?', 'Compare the eligible lines for your destination and packed items. Check each line’s final quote, estimated timing and tracking coverage.', 'Kakobuy 应该选哪条国际线路？', '比较目的地和包裹适用的线路，核对报价、预计时效与跟踪覆盖。', 'tracking'],
  ['tracking-no-scan', 'Why has my Kakobuy tracking not updated yet?', 'A tracking number can be assigned before the carrier’s first scan. Check the last dated event and contact support with the parcel number if you need clarification.', '为什么 Kakobuy 单号暂时没有更新？', '单号可能早于承运商首次扫描生成。先查看最后一条带日期的记录，有疑问时用包裹编号联系支持。', 'tracking']
);

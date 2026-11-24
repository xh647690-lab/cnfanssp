export const editorialSources = {
  competitor: ['Kakobuy Knowledge Hub · Guide topics', 'https://kakobuy.help/guide'],
  workflow: ['KakobuyLab · Spreadsheet workflow', 'https://kakobuylab.com/guides/kakobuy-spreadsheet-guide/'],
  packing: ['Kakobuy Spreadsheet Top · Packing and shipping topics', 'https://kakobuyspreadsheettop.com/guides/'],
  comparison: ['Kakobuy Journal · Agent comparison topics', 'https://kakobuyjournal.com/guides/'],
  superbuy: ['Superbuy · Shopping agent service', 'https://www.superbuy.com/en/page/shoppingagent/'],
  process: ['Kakobuy · About us', 'https://www.kakobuy.com/help/about-us'],
  fees: ['Kakobuy · Cost breakdown', 'https://www.kakobuy.com/service/help/question?cid=35&id=74'],
  picklist: ['Kakobuy Picklist · Spreadsheet', 'https://kakobuypicklist.com/spreadsheet/'],
  listing: ['Kakobuy · Example Weidian listing', 'https://www.kakobuy.com/item/details?affcode=28dfv&url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7676758776']
};

const originalGuides = [
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
    slug: 'kakobuy-qc-photos', sources: ['process'],
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

const originalFaqs = [
  ['how-to-buy', 'How do I buy on Kakobuy?', 'Paste the original seller link into Kakobuy, select the variant and place the order. Review the warehouse inspection before submitting a parcel.', 'Kakobuy 怎么下单？', '粘贴卖家原链接，选好规格并提交订单。入库后查看验货信息，再提交包裹。', 'process'],
  ['shipping-cost', 'How is Kakobuy shipping calculated?', 'International shipping depends on the parcel weight, shipping method and destination. Domestic freight, packaging and optional services can add to the total.', 'Kakobuy 运费怎么算？', '国际运费取决于重量、运输方式和目的地。总价还可能包括国内运费、包装和可选服务。', 'fees'],
  ['qc-photos', 'When can I check Kakobuy QC photos?', 'Review the warehouse inspection after the seller’s parcel arrives at the Kakobuy warehouse and before submitting international shipping.', '什么时候能看 Kakobuy 验货图？', '卖家包裹到仓后，国际发运前，可以查看仓库验货信息。', 'process'],
  ['weidian', 'Can I order a Weidian item through Kakobuy?', 'Kakobuy accepts seller links. Open the Weidian link in Kakobuy and check the available variants and ordering options for that item.', 'Kakobuy 可以买微店商品吗？', '可以通过卖家链接查找商品。把微店链接放进 Kakobuy 后，先核对该商品可选规格和下单状态。', 'listing'],
  ['consolidation', 'Can I combine orders in one Kakobuy parcel?', 'Kakobuy lets you choose items in the warehouse and submit them together as one parcel.', 'Kakobuy 可以合箱吗？', '可以从仓库选择要寄出的商品，将它们放在同一个包裹内提交。', 'process'],
  ['two-shipping-charges', 'Why are there two shipping charges?', 'Domestic freight covers the seller-to-warehouse trip. International freight covers the warehouse-to-destination trip.', '为什么会有两段运费？', '国内运费对应卖家到仓库，国际运费对应仓库到收件地。', 'fees']
];

const newGuides = [
  {
    slug: 'kakobuy-spreadsheet-product-links', sources: ['workflow', 'listing', 'process'],
    en: ['Kakobuy spreadsheet links: from shortlist to seller listing', 'Check the marketplace, item ID and selected variant before you place an order.',
      ['Build a shortlist with a concrete search', 'Start with the item type, such as jersey or hoodie. Use the closest category and open two or three promising rows. A catalogue card can help you find a listing, but the live seller page is where to check the option and price you intend to order.'],
      ['Keep the original seller URL', 'Open the marketplace link and record its item ID where one is shown. For a Weidian link, look for itemID in the URL. Save the original seller URL beside the directory link so you can reopen the item even if the directory row moves. Paste the seller URL into Kakobuy and compare the parsed item with your shortlist.'],
      ['Check the same variant on both pages', 'Choose the intended colour and size and compare the wording or image for that exact variant. A headline price may belong to a different option. If the item fails to load or the variant differs, reopen the source listing and check availability before paying.']],
    zh: ['Kakobuy Spreadsheet 商品链接怎么核对', '下单前核对来源平台、商品 ID 和实际选择的规格。',
      ['用具体品类做候选清单', '先搜索球衣、卫衣等商品类型，再按分类打开两三个候选。目录卡片用于选品，所选规格和价格以卖家当前页面为准。'],
      ['保留卖家原链接', '打开电商平台链接并记录商品 ID。微店链接可查看 itemID 参数。把卖家原链接与目录链接一起保存，再把原链接粘贴到 Kakobuy 核对解析结果。'],
      ['比较同一个规格', '选择目标颜色和尺码，对照相同规格的文字或图片。标题价可能对应其他选项。商品无法加载或规格不符时，先回卖家页面检查再付款。']]
  },
  {
    slug: 'kakobuy-warehouse-consolidation', sources: ['process', 'fees', 'competitor'],
    en: ['Kakobuy warehouse and parcel consolidation guide', 'Decide which warehouse items belong in the same international parcel.',
      ['Check the status of each order', 'Make a list of the items you intend to ship. For each item, check warehouse arrival, inspection status and any deadline visible in your account. Keep an item with an unresolved inspection or return question out of the parcel until you know how you want to handle it.'],
      ['Compare one parcel with a split shipment', 'Estimate the price of shipping all eligible items together, then compare it with the total of two smaller parcels using the same destination. Check weight limits, route eligibility and packaging costs for both plans. A large box can change which routes are available.'],
      ['Review the exact items before paying', 'Confirm quantities, delivery address and packaging choices in the parcel review. Record which items were included in each parcel so you can distinguish the shipment records and track anything that stays in the warehouse.']],
    zh: ['Kakobuy 仓库入库和合箱指南', '判断哪些入库商品适合放在同一个国际包裹。',
      ['逐件核对订单状态', '列出计划发运的商品，查看到仓、验货及账户显示的期限。有验货或退换疑问的商品先单独保留。'],
      ['比较合箱和分开发运', '按相同目的地比较合箱与拆成两箱的总报价，同时检查各方案的线路、重量范围和包装费用。箱子过大可能改变可选线路。'],
      ['付款前核对包裹清单', '确认每件商品的数量、收件地址和包装方案。留一份箱内清单，方便跟踪每个包裹和仍在仓库的商品。']]
  },
  {
    slug: 'kakobuy-volumetric-weight-and-packing', sources: ['fees', 'packing', 'process'],
    en: ['Kakobuy packing and volumetric weight: how to compare quotes', 'Measure the outside of the parcel and use the selected line’s billing rules.',
      ['Record the packed weight and dimensions', 'Use the finished outer-box length, width and height alongside the scale weight. A light item in a large carton can occupy more carrier capacity than its actual weight suggests. Check the carrier’s units, divisor and rounding rules in the quote.'],
      ['Work through a weight example', 'A 40 × 30 × 25 cm parcel occupies 30,000 cubic centimetres. With an illustrative divisor of 6,000, that is 5 kg of volumetric weight. If a line bills the higher weight and the parcel weighs 3 kg on the scale, 5 kg is the starting billed weight before the line’s rounding rules. Use the divisor shown for your route.'],
      ['Balance smaller packaging with protection', 'Compare the dimensions with and without optional retail boxes if the platform offers that choice. Keep enough protection for fragile or easily deformed items and run the quote again after any size change.']],
    zh: ['Kakobuy 体积重和打包怎么比较', '使用打包后的外箱尺寸，并以所选线路的计费方式为准。',
      ['记录打包后的重量和尺寸', '记录外箱长宽高及实重。占空间的大箱子即使很轻，也可能按体积计费。先看路线的尺寸单位、除数和进位规则。'],
      ['用示例计算体积重', '40 × 30 × 25 厘米的外箱体积是 30,000 立方厘米。假设除数为 6,000，体积重为 5 公斤。若该线路按实重和体积重较高者计费，实重 3 公斤的箱子会从 5 公斤起算，再按线路进位。'],
      ['缩小箱子时保留保护', '如果页面允许去掉零售盒，比较保留与去掉包装后的尺寸。怕压或易碎商品要保留合适的保护，尺寸变动后重新报价。']]
  },
  {
    slug: 'kakobuy-sizing-and-order-notes', sources: ['workflow', 'competitor', 'process'],
    en: ['Kakobuy sizing guide and order-note examples', 'Use measurements from a similar item you own and record the exact variant.',
      ['Compare like-for-like measurements', 'For clothing, measure a comparable garment laid flat and match the seller’s measuring method. For example, compare a flat chest width of 54 cm with the seller’s flat chest width. If a chart lists circumference, check the measuring convention before comparing the values.'],
      ['Make the variant easy to identify', 'Select the right option and use a note to clarify the intended choice where notes are supported. An example is “Dark blue, size L, option 03. Please contact me if this variant is unavailable.” Keep any question about fit separate from the colour and size choice.'],
      ['Check arrival against your order', 'Compare the size label and visible measurements with the listing and saved variant. If a missing measurement affects your decision, ask whether an appropriate warehouse photo is available before shipping.']],
    zh: ['Kakobuy 尺码选择与订单备注示例', '用已有同类商品作测量基准，并写清具体规格。',
      ['按同一种方法比较', '把一件同类衣服平铺测量，按卖家尺码表的测法比较。例如平铺胸宽 54 厘米应与平铺胸宽比较，遇到胸围时先确认定义。'],
      ['写清所选规格', '先选正确选项，再在支持的地方备注。示例为“深蓝、L 码、选项 03。如该规格缺货，请先联系我。”关于版型的问题可单独写明。'],
      ['到仓后再核对', '对照卖家页面和下单记录核对尺码标签与可见尺寸。如果关键测量缺失，在国际发货前问仓库能否补充对应照片。']]
  },
  {
    slug: 'kakobuy-return-exchange-warehouse', sources: ['process', 'workflow', 'competitor'],
    en: ['Kakobuy returns and exchanges before international shipping', 'Document a wrong item, missing quantity or visible defect while it is at the warehouse.',
      ['Open a request with clear evidence', 'Keep the order number, selected option and a warehouse photo that shows the discrepancy. Describe what you ordered and what arrived. For example, “I selected size L. The label in photo 2 shows M.” That gives support an exact point to check.'],
      ['Ask about eligibility, deadlines and charges', 'Confirm the options for the specific item in your order. Request the applicable deadline, any seller approval requirement and who would pay domestic return shipping. If the deadline is unclear, contact support promptly and keep the record of the request.'],
      ['Separate the item from your shipping plan', 'Leave the affected item out of the international parcel while the request is pending. If you accept a replacement, review its warehouse record before adding it to a parcel. Track any approved refund using the applicable account or payment record.']],
    zh: ['Kakobuy 仓库退换货怎么处理', '商品发往海外前，记录错款、缺件或可见瑕疵。',
      ['用具体证据发起咨询', '保留订单号、所选规格和能看出问题的验货图。例如“订单选了 L 码，验货图 2 的标签是 M 码”。'],
      ['询问资格、期限和费用', '以该订单可用的选项为准，确认受理期限、是否需要卖家同意，以及国内退运费由谁承担。期限不清楚时尽快联系客服并保留记录。'],
      ['把问题商品单独留在仓库', '处理期间先不要把该商品加入国际包裹。收到换货后重新验货，退款获批后按适用的账户或支付记录跟进。']]
  },
  {
    slug: 'kakobuy-parcel-tracking', sources: ['process', 'packing'],
    en: ['Kakobuy parcel tracking: follow the order from warehouse to delivery', 'Use the correct number for each stage and know what evidence to send to support.',
      ['Identify the shipment stage', 'A seller shipment to the Chinese warehouse and an international parcel are two separate stages. Start with the Kakobuy order or parcel record. After international dispatch, use the carrier and tracking number associated with the parcel.'],
      ['Read the last scan in context', 'Save the last event, date and location. Check the carrier named in your parcel details and consult a destination carrier if the shipment record identifies one. A label-created event and a carrier acceptance scan represent different milestones.'],
      ['Escalate with a focused summary', 'If tracking stalls beyond the guidance for the route or shows an exception, send support the parcel number, carrier tracking number, last scan and a short description. Check your line’s available support or claim window before waiting longer.']],
    zh: ['Kakobuy 国际包裹物流怎么查', '区分国内单和国际单，用正确的单号和物流节点排查。',
      ['先确认包裹所处阶段', '卖家寄往中国仓库和仓库发往国外是两个阶段。先查看 Kakobuy 的订单或包裹记录，国际发运后使用包裹对应的承运商及追踪号。'],
      ['结合时间和地点看最后一个节点', '记录最新状态、日期和地点。优先查看包裹详情中的承运商，记录显示有末端承运商时再去对应渠道查询。已生成面单与实际揽收是不同节点。'],
      ['用完整信息联系客服', '超过线路指引或出现异常时，发送包裹编号、物流单号、最后节点和简短描述。继续等待前先确认线路的客服或理赔时限。']]
  },
  {
    slug: 'kakobuy-vs-superbuy-cost-checklist', sources: ['process', 'fees', 'comparison', 'superbuy'],
    en: ['Kakobuy vs Superbuy: a like-for-like buying-agent comparison', 'Compare the same item and parcel with identical assumptions.',
      ['Use one basket for both quotes', 'Use the same seller link, variant, quantity and destination for both agents. Record the item and domestic charges, then compare international freight using the same packed dimensions and weight. Note the date and currency for each quote.'],
      ['Compare the service terms that matter for your order', 'Check inspection scope, storage deadlines, packaging charges, available shipping lines and return handling. An extra photo or packaging option can change the cost of the same basket, so list any extras you actually plan to use.'],
      ['Choose from eligible, current options', 'Rule out routes that do not take the item or box size. Compare the total payable with the service and delivery information shown for the remaining routes. Recheck any quote if the parcel dimensions, destination or variant changes.']],
    zh: ['Kakobuy 和 Superbuy 怎么比较', '用相同商品和包裹条件比较两个代购平台。',
      ['用同一组商品报价', '两边使用相同卖家链接、规格、数量和目的地。先记录商品费用和国内运费，再按相同打包重量和尺寸比较国际运费，写明日期和币种。'],
      ['比较影响本单的服务条款', '检查验货范围、仓储截止日、包装费用、可用物流及退换处理。把确实要用的额外照片或打包选项也纳入成本。'],
      ['从当前可用的线路里选', '先排除不接受该商品或箱型的线路，再比较剩余线路的总价、服务与时效描述。包裹尺寸、目的地或规格变动后重新核价。']]
  }
];

export const guides = [
  ...newGuides.map(guide => ({ ...guide, datePublished: '2026-12-08' })),
  ...originalGuides
];

const newFaqs = [
  ['spreadsheet-link', 'Which Kakobuy spreadsheet link should I copy?', 'Copy the original marketplace listing when you want Kakobuy to load the seller’s item. Keep the directory link if you also want to return to the catalogue record.', 'Kakobuy 选品表要复制哪个链接？', '要让 Kakobuy 读取商品时，复制卖家原链接。想找回目录记录时，可以一起保留目录链接。', 'workflow'],
  ['packed-weight', 'What is volumetric weight on a Kakobuy parcel?', 'It is a weight calculated from the parcel’s outside dimensions. Check the selected line for its divisor, units and whether it bills by actual or volumetric weight.', 'Kakobuy 包裹的体积重是什么？', '指按包裹外箱尺寸计算的重量。查看所选线路的除数、单位，以及采用实重还是体积重。', 'packing'],
  ['tracking-number', 'Where do I look for my Kakobuy tracking number?', 'Open the international parcel record and look for the carrier and tracking number. For seller-to-warehouse delivery, check the original order record.', 'Kakobuy 物流单号在哪里看？', '国际包裹在包裹记录里找承运商和物流号。卖家寄到仓库的国内单在原订单里查。', 'process'],
  ['select-size', 'How should I choose a clothing size on Kakobuy?', 'Measure a similar garment and compare it with the seller’s chart using the same units and measuring method. Save the selected option for your QC check.', 'Kakobuy 衣服尺码怎么选？', '实测已有同类衣服，用相同单位和测法对照卖家尺码表。保留所选规格，方便到仓核对。', 'workflow'],
  ['order-notes', 'What should a Kakobuy order note include?', 'Where notes are supported, include the exact variant and a specific instruction, such as asking to be contacted if the selected size is unavailable.', 'Kakobuy 订单备注写什么？', '在支持备注的位置写清具体规格和要求，例如所选尺码无货时先联系你。', 'competitor'],
  ['link-not-loading', 'What if a seller link will not load in Kakobuy?', 'Open the original listing to see if it still works. Try copying the full product page URL and check whether Kakobuy recognises it. Confirm the item before paying.', '商品链接在 Kakobuy 打不开怎么办？', '先打开卖家原页面确认链接还有效，再复制完整商品网址并检查 Kakobuy 能否识别。付款前核对商品。', 'workflow'],
  ['variant-price', 'Why did the Kakobuy item price change after I selected a variant?', 'Different options can carry different seller prices. Compare the exact colour, size, version and quantity before evaluating the price difference.', '为什么选完规格后 Kakobuy 商品价变了？', '卖家可能对不同规格设置不同价格。比较前确认颜色、尺码、版本和数量相同。', 'workflow'],
  ['qc-photo-request', 'Can I request an extra warehouse photo?', 'Check the services available for that order or ask support. Describe one specific angle, label or measurement you need and check the displayed charge.', '可以要求 Kakobuy 补拍验货图吗？', '查看该订单可用的服务或联系客服。说明所需的角度、标签或测量位置，并核对页面显示的费用。', 'competitor'],
  ['warehouse-deadline', 'How do I check the Kakobuy warehouse storage deadline?', 'Check each item’s warehouse record and the current storage policy. Record the displayed deadline for each item when waiting for more orders to arrive.', '怎么确认 Kakobuy 仓库的存放期限？', '查看每件商品的仓库记录及现行仓储规则。等待其他订单到仓时，把各商品显示的截止日记下来。', 'competitor'],
  ['wrong-item', 'What should I do if Kakobuy QC shows the wrong item?', 'Save the order details and relevant QC image. Contact support before international shipment and explain the difference between the ordered and received variant.', 'Kakobuy 验货发现错款怎么办？', '保存订单详情和相关验货图，在国际发运前联系客服，说明下单规格与实收规格的差异。', 'workflow'],
  ['return-domestic-fee', 'Who pays domestic shipping for a Kakobuy return?', 'Check the applicable seller and order terms with support. The reason for the return and the seller’s rules can determine the available options and costs.', 'Kakobuy 退货的国内运费谁出？', '向客服核对该订单和卖家的条款。退货原因与卖家规则会影响可选方案和费用。', 'competitor'],
  ['packing-options', 'Should I remove retail boxes before shipping?', 'If the option is available, compare the packed dimensions and shipping quotes with and without the box. Consider whether the item needs the box for protection.', 'Kakobuy 国际发货要去掉商品盒吗？', '若支持该选项，比较去盒前后的外箱尺寸和运费，再考虑商品是否需要原盒保护。', 'packing'],
  ['split-parcel', 'When should I compare splitting a Kakobuy parcel?', 'Compare a split if the combined box exceeds a route limit or changes eligible lines. Add up both smaller parcel quotes to compare with the one-box quote.', '什么时候需要比较拆箱寄送？', '合箱后超过线路限制，或可选线路改变时，可比较拆箱。把两个小包裹的报价相加，再与合箱报价比较。', 'packing'],
  ['shipping-estimate', 'What do I need for a Kakobuy shipping estimate?', 'Start with destination, packed weight, dimensions and item type. Compare routes on the same inputs and check the final cost at parcel review.', '估算 Kakobuy 运费要准备哪些信息？', '准备收件地、打包后重量、外箱尺寸和商品类型。用相同条件比较线路，提交时复核费用。', 'fees'],
  ['international-line', 'How should I choose a Kakobuy international shipping line?', 'Check route eligibility, billed weight, quoted cost, delivery estimate and tracking coverage for your actual destination and items.', 'Kakobuy 国际物流线路怎么选？', '根据实际目的地和商品，比较线路限制、计费重量、报价、预计时效及追踪范围。', 'process'],
  ['parcel-scan', 'What if my Kakobuy tracking stops updating?', 'Review the last scan and the carrier’s guidance. If it exceeds the route’s expected window or shows an exception, send support the parcel and tracking numbers.', 'Kakobuy 物流很久不更新怎么办？', '查看最后节点和承运商指引。超过线路预计时段或出现异常时，把包裹编号和物流号发给客服。', 'packing'],
  ['agent-comparison', 'How can I compare Kakobuy with Superbuy?', 'Quote the same variant, destination and packed parcel on both platforms. Compare the total, available lines, warehouse services and return terms.', 'Kakobuy 和 Superbuy 怎么对比？', '用相同规格、收件地和打包参数报价，比较总价、可用线路、仓库服务和退换条款。', 'comparison'],
  ['shipping-separate', 'Do I pay international shipping when I first order in Kakobuy?', 'The buying workflow separates seller-to-warehouse purchasing from international parcel submission. Check the charges at each step in your account.', 'Kakobuy 第一次下单就要付国际运费吗？', '代购商品到仓与提交国际包裹是两个环节，分别核对各环节账户里显示的费用。', 'fees']
];

export const faqs = [...newFaqs, ...originalFaqs];

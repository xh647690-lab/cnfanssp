export const editorialSources = {
  process: ['Kakobuy · About us', 'https://www.kakobuy.com/help/about-us'],
  fees: ['Kakobuy · Cost breakdown', 'https://www.kakobuy.com/service/help/question?cid=35&id=74'],
  picklist: ['Kakobuy Picklist · Spreadsheet', 'https://kakobuypicklist.com/spreadsheet/'],
  listing: ['Kakobuy · Example Weidian listing', 'https://www.kakobuy.com/item/details?affcode=28dfv&url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7676758776']
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

export const faqs = [
  ['how-to-buy', 'How do I buy on Kakobuy?', 'Paste the original seller link into Kakobuy, select the variant and place the order. Review the warehouse inspection before submitting a parcel.', 'Kakobuy 怎么下单？', '粘贴卖家原链接，选好规格并提交订单。入库后查看验货信息，再提交包裹。', 'process'],
  ['shipping-cost', 'How is Kakobuy shipping calculated?', 'International shipping depends on the parcel weight, shipping method and destination. Domestic freight, packaging and optional services can add to the total.', 'Kakobuy 运费怎么算？', '国际运费取决于重量、运输方式和目的地。总价还可能包括国内运费、包装和可选服务。', 'fees'],
  ['qc-photos', 'When can I check Kakobuy QC photos?', 'Review the warehouse inspection after the seller’s parcel arrives at the Kakobuy warehouse and before submitting international shipping.', '什么时候能看 Kakobuy 验货图？', '卖家包裹到仓后，国际发运前，可以查看仓库验货信息。', 'process'],
  ['weidian', 'Can I order a Weidian item through Kakobuy?', 'Kakobuy accepts seller links. Open the Weidian link in Kakobuy and check the available variants and ordering options for that item.', 'Kakobuy 可以买微店商品吗？', '可以通过卖家链接查找商品。把微店链接放进 Kakobuy 后，先核对该商品可选规格和下单状态。', 'listing'],
  ['consolidation', 'Can I combine orders in one Kakobuy parcel?', 'Kakobuy lets you choose items in the warehouse and submit them together as one parcel.', 'Kakobuy 可以合箱吗？', '可以从仓库选择要寄出的商品，将它们放在同一个包裹内提交。', 'process'],
  ['two-shipping-charges', 'Why are there two shipping charges?', 'Domestic freight covers the seller-to-warehouse trip. International freight covers the warehouse-to-destination trip.', '为什么会有两段运费？', '国内运费对应卖家到仓库，国际运费对应仓库到收件地。', 'fees']
];

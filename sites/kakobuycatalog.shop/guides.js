const official = {
  workflow: ['Kakobuy shopping workflow', 'https://www.kakobuy.com/help/about-us'],
  costs: ['Kakobuy help: order and shipping costs', 'https://www.kakobuy.com/service/help/question?cid=35&id=74'],
  registration: ['Kakobuy registration', 'https://www.kakobuy.com/register']
};

export const editorial = {
  faq: [
    {title:'What happens after I place a Kakobuy order?', body:'Kakobuy purchases from the seller, who ships the item to the Kakobuy warehouse in China. Review the warehouse quality check before submitting an international parcel.', source:official.workflow},
    {title:'What does Kakobuy QC check?', body:'Kakobuy describes checks for visible defects, size and color. Compare the warehouse record with the exact option you ordered and contact support about discrepancies before shipping.', source:official.workflow},
    {title:'Does the item price include international shipping?', body:'International freight is a separate charge. The order can also involve shipping from the Chinese seller to the warehouse, packaging, and optional services.', source:official.costs},
    {title:'How do I use a Weidian link with Kakobuy?', body:'Open the item through its Kakobuy purchase link when one is available. You can also paste the original seller link into Kakobuy and check the listing and variant before ordering.', source:official.workflow},
    {title:'Can I ship items from multiple sellers together?', body:'After the items arrive at the warehouse, select the ones you want to send together and submit them as one parcel. Review the available shipping lines for your destination.', source:official.workflow},
    {title:'Where do I register for Kakobuy?', body:'Create the purchasing account on the Kakobuy registration page. CNFansSP lists product links, and Kakobuy handles the purchasing and warehouse steps.', source:official.registration}
  ],
  guides: [
    {
      slug:'how-to-buy-on-kakobuy',
      title:'How to buy on Kakobuy using a Weidian product link',
      summary:'From opening a spreadsheet listing to submitting your first warehouse parcel.',
      sections:[
        ['Open the source listing', 'Use the spreadsheet to find the product, then open its listing. For a Weidian item, check the seller page and the item ID. If there is a Kakobuy button, it opens the seller listing inside Kakobuy. Otherwise paste the seller URL into Kakobuy.'],
        ['Confirm options before paying', 'Compare the title, color, size and quantity against the seller listing. Check the product price and any domestic freight shown at checkout. Save the seller page if you want a reference for the later warehouse check.'],
        ['Review the warehouse check', 'The seller ships to the agent’s warehouse in China. When the item appears there, check the warehouse record, decide which items to ship together and review the international route quote before submitting your parcel.']
      ], source:official.workflow
    },
    {
      slug:'kakobuy-shipping-cost',
      title:'Kakobuy shipping cost and how to read an estimate',
      summary:'Separate seller freight, international shipping and packaging before comparing quotes.',
      sections:[
        ['Separate the order from the parcel', 'The order includes the merchandise and any freight from the seller to the warehouse. International freight appears separately. Kakobuy also lists packaging and optional services as possible costs.'],
        ['Compare routes for the same parcel', 'Set the destination and compare the lines available for that parcel. Review the weight used in the estimate and the shipping method. If a route shows a different billing weight or inclusions, read its conditions before comparing prices.'],
        ['Check the parcel quote before paying', 'Recheck the quote when selecting your warehouse items, packaging and route. An early item-page estimate is useful for planning, while the parcel quote reflects the shipment you are actually submitting.']
      ], source:official.costs
    },
    {
      slug:'kakobuy-qc-photos',
      title:'Kakobuy QC photos: what to check at the warehouse',
      summary:'Compare the received item with the variant you ordered before international dispatch.',
      sections:[
        ['Keep the order details handy', 'Start with the seller listing and the variant saved on your order. If you ordered a jersey, note the size, color and any customization you requested.'],
        ['Compare visible details', 'Look at the warehouse record for visible defects, color and size information. Where pictures are available, check what is actually visible and distinguish a missing angle from a confirmed difference.'],
        ['Resolve differences before shipping', 'If the item looks different from the order, contact Kakobuy while it is still in the warehouse. Include the order reference and the relevant photo or option. Continue to parcel submission once you have reviewed the item.']
      ], source:official.workflow
    }
  ]
};

const productExample = ['CNFansSP: Jersey-60', 'https://www.cnfanssp.com/AllProducts/6667.html'];
const discovery = ['Kakobuy Pick: finding products and item IDs', 'https://kakobuypick.com/guide/'];
const ordering = ['Kakobuy Select: buyer workflow', 'https://www.kakobuyselect.com/guide'];
const guideIndex = ['Kakobuy Help: buying and shipping topics', 'https://kakobuy.help/guide'];

const newFaq = [
  ['What is a Kakobuy spreadsheet?', 'It is a discovery catalog. In this spreadsheet, CNFansSP supplies the listing; Kakobuy is where you review the seller link and place an order.', productExample],
  ['Can I search the Kakobuy spreadsheet by product name?', 'Enter the product name or a short descriptive term in the search box. The results open on CNFansSP. Try a shorter name or browse the category if the first search is too narrow.', productExample],
  ['Is the catalog page number the Weidian item ID?', 'They identify different records. For example, CNFansSP uses page 6667 for Jersey-60 and shows 7632511460 as the Weidian item ID.', productExample],
  ['Which links can I bring to Kakobuy?', 'Kakobuy describes purchasing from Chinese marketplaces including Taobao, Weidian and 1688. Start with the original marketplace listing and check what Kakobuy loads before you pay.', official.workflow],
  ['What should I check if Kakobuy opens a different item?', 'Compare the marketplace and item ID against your source listing. Reopen the original seller URL if the match is unclear. Verify the selected variant separately.', discovery],
  ['How should I choose a size for a Kakobuy order?', 'Use the seller’s chart for that exact listing. For clothing, compare like-for-like garment measurements with a piece you already own and check whether the chart uses centimeters.', guideIndex],
  ['What should I write in a Kakobuy order note?', 'Identify the exact option and add only the details that need clarification, such as the size label, color label or a specific measurement. Keep the note consistent with the option you selected.', guideIndex],
  ['Are seller photos and warehouse QC photos the same?', 'Seller photos illustrate the listing. The warehouse QC record appears after the item arrives and helps you review the item received.', official.workflow],
  ['What should I do if QC shows a different color?', 'Compare the warehouse image with your order option and seller reference. Send support the order reference and the image while the item is still at the warehouse.', official.workflow],
  ['When does Kakobuy charge for international shipping?', 'The international freight is reviewed with the parcel when you choose a route, after the seller-to-warehouse purchasing stage.', official.costs],
  ['Where can I estimate Kakobuy shipping?', 'Kakobuy’s help points to freight estimates on product information pages. Use the estimate while planning and check the quote again when the parcel is prepared.', official.costs],
  ['Why did the Kakobuy parcel quote change?', 'Confirm that both quotes use the same destination, shipping method, weight and package contents. Packaging and selected optional services may also affect the total.', official.costs],
  ['How do I compare two Kakobuy shipping lines?', 'Use the same parcel contents and destination for both quotes. Compare the price, expected transit range and route conditions displayed for your shipment.', official.costs],
  ['Which order status should I check before combining items?', 'Check that every item you want to include has arrived at the warehouse. Review each item’s QC record before selecting it for the parcel.', official.workflow],
  ['Where should I look for Kakobuy parcel tracking?', 'After dispatch, open the outgoing parcel record and use the tracking number and carrier shown for that shipment. The seller’s original tracking refers to the domestic leg.', ordering],
  ['What should I prepare before asking about a Kakobuy return?', 'Keep the order reference, seller option, warehouse photos and a brief description of the issue. Ask Kakobuy about eligibility and costs for that order while the item is still in the warehouse.', guideIndex]
];
editorial.faq.forEach((entry, index) => { entry.id = index + 1; });
editorial.faq.unshift(...newFaq.map(([title, body, source], index) => ({title, body, source, id: index + 7})));

const newGuides = [
  {
    slug:'how-to-use-kakobuy-spreadsheet',
    title:'How to use a Kakobuy spreadsheet to verify product links',
    summary:'Find a listing, identify the seller’s item ID and carry the correct link into Kakobuy.',
    sections:[
      ['Start with a name or category','Search for the shortest product name that distinguishes what you want, or browse a category if the name is generic. Open the CNFansSP result and check the gallery and listing details before following a purchase link.'],
      ['Separate the two identifiers','For Jersey-60, CNFansSP’s detail path ends in 6667.html, while the page lists Weidian item ID 7632511460. Keep the product ID with the marketplace name so you can verify a purchase link or recognize when a different listing has opened.'],
      ['Check the seller page before choosing an option','Follow the seller or Kakobuy link. Confirm the marketplace, item ID and product description, then choose the exact variant on Kakobuy. Note the price for that variant and any seller freight shown at checkout. A catalog label or photo can help you find the listing again, but the selected option is what you need to compare.']
    ], source:productExample
  },
  {
    slug:'kakobuy-taobao-weidian-1688-links',
    title:'Taobao, Weidian and 1688 links on Kakobuy',
    summary:'Identify the source marketplace and troubleshoot a link before placing an order.',
    sections:[
      ['Keep the full product URL','Use a seller product link with its item identifier. If you started with a shortened share link, open it to locate the listing first. Retain the marketplace domain and the original URL so you can tell similar products from different sellers apart.'],
      ['Review what Kakobuy opens','Paste the original link into Kakobuy and check the loaded title and options. If a comparison fails, reopen the seller listing to see whether it redirects or presents different options. Verify any quantity condition shown by the seller, especially if the listing offers a price range.'],
      ['Save a reference for the warehouse check','Keep the product URL and the selected variant together. When you order two similar items, label the references separately with size and color. You can compare each warehouse record to the correct reference after arrival.']
    ], source:official.workflow
  },
  {
    slug:'kakobuy-size-selection-order-notes',
    title:'Kakobuy sizing guide: measure first, then write the order note',
    summary:'Use the seller chart for your specific listing and make the ordered variant easy to verify.',
    sections:[
      ['Compare the same kind of measurement','Pick a garment that fits and measure it using the same method shown by the seller. A flat chest width and a full chest circumference are different. Use the seller’s units and compare like with like before deciding between sizes.'],
      ['Use the listing’s exact option names','Choose the size and color in the product controls. If you need to clarify a detail, use the labels as they appear in the listing and add a short note. For example, specify which color option you mean if two options have very similar labels.'],
      ['Make the warehouse check specific','Keep the size chart and chosen option next to your order reference. If an item arrives with a confusing label, review the warehouse record and ask whether a relevant measurement can be checked before including it in an international parcel.']
    ], source:guideIndex
  },
  {
    slug:'kakobuy-warehouse-consolidation',
    title:'Kakobuy warehouse consolidation: build and review a parcel',
    summary:'Group arrivals by QC status and compare one parcel with separate shipments.',
    sections:[
      ['Wait for the items you want to combine','Items from different sellers can arrive separately. Review the warehouse record for each and select the items you intend to ship. Keep any item under review separate while you ask about a discrepancy.'],
      ['Compare complete parcel options','Check a quote for the group you intend to send. If size, contents or route eligibility makes the group difficult to ship, compare it with two smaller parcels. Use the same destination and include packaging and route charges in both scenarios.'],
      ['Review the final selection','Before submitting, compare the selected warehouse items, destination address and available route. Save the resulting parcel reference so you can distinguish it from the individual purchase orders when checking dispatch.']
    ], source:official.workflow
  },
  {
    slug:'kakobuy-parcel-tracking',
    title:'How to track a Kakobuy parcel after dispatch',
    summary:'Follow the right tracking number from seller shipment through international delivery.',
    sections:[
      ['Identify which leg you are tracking','The seller’s tracking describes the trip to the Kakobuy warehouse. The international parcel can contain several seller orders and has its own parcel record. Start with the international record if you are checking delivery to your address.'],
      ['Check the carrier named in the parcel record','Use the number and carrier shown for that parcel. Compare the timestamp of the latest scan and any handoff information. If the service provides a local delivery reference, keep it alongside the original number.'],
      ['Prepare a focused support question','If you need help, include the parcel reference, tracking number, carrier name and last scan. Ask about the specific missing step, such as whether the parcel has been handed to the carrier or whether a local delivery reference is available.']
    ], source:ordering
  },
  {
    slug:'kakobuy-international-shipping-lines',
    title:'How to compare Kakobuy international shipping lines',
    summary:'Compare route quotes using one parcel, one destination and the same assumptions.',
    sections:[
      ['Hold the parcel details constant','Run the comparison with the same items and destination. Record the displayed weight, any dimensional or chargeable weight shown, and the package contents. A different packing configuration can change which lines appear.'],
      ['Read the conditions behind the quote','Compare the quoted freight with the line’s estimated transit window and any stated limits or service conditions. Include packaging and optional services you actually selected. The route quote is specific to your parcel and destination.'],
      ['Compare the final options again','When the warehouse prepares the parcel, check whether the packaging or quoted weight has changed. Keep a record of the chosen line and what the quote includes. This makes it easier to compare the submitted shipment with the estimate you made earlier.']
    ], source:official.costs
  },
  {
    slug:'kakobuy-order-and-parcel-payments',
    title:'Kakobuy payments explained: order costs and parcel charges',
    summary:'Understand what you are paying for at each stage and reconcile the final cost.',
    sections:[
      ['Review the seller-to-warehouse order','Record the price for the selected variant and any seller freight displayed for delivery within China. Keep this order record separate from the quote for shipping to your address. Multiple purchases can later share one parcel.'],
      ['Review the international parcel before payment','After selecting warehouse items and a route, compare the international freight, packaging and any selected additional services. Check the total and payment choices shown in your own account at that step.'],
      ['Reconcile one delivered total','Add together the purchase amounts, domestic freight and the resulting parcel charges. If you are splitting the parcel cost among items for your own budgeting, use the actual parcel total once available and keep the allocation separate from the agent’s receipts.']
    ], source:official.costs
  }
];
editorial.guides.unshift(...newGuides);

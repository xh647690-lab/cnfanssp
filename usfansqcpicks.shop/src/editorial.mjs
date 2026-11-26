export const sources = {
  guide: ['USFans Beginner’s Guide','https://usfans.com/beginner-guide'],
  help: ['USFans Help Center','https://usfans.com/help/category/all'],
  terms: ['USFans Service Agreement','https://www.usfans.com/page/serviceAgreement'],
  about: ['About USFans','https://www.usfans.com/page/about'],
  register: ['USFans registration','https://www.usfans.com/register'],
  product: ['CNFansSP Jersey-60 listing','https://www.cnfanssp.com/AllProducts/6667.html'],
  sample: ['Example USFans product page','https://usfans.com/product/3/7520842863'],
  weight: ['USFans estimated and actual billing weight','https://usfans.com/help/HCON_STATIC_053'],
  storage: ['USFans warehouse storage policy','https://usfans.com/help/HCON_STATIC_071'],
  contact: ['USFans contact page','https://www.usfans.com/about?key=2'],
  search: ['CNFansSP search example','https://www.cnfanssp.com/search.html?keywords=Jersey&channelid=2']
};

export const faqs = [
  ['What is USFans?', 'USFans is a shopping agent that coordinates purchases and shipping from Chinese marketplaces. The seller supplies the item and USFans handles the assisted order.', 'about'],
  ['What is a USFans spreadsheet?', 'It is a catalog for finding seller listings. This spreadsheet reads CNFansSP and sends you to the source detail page to inspect the listing before buying.', 'product'],
  ['Where do I register?', 'Open the official USFans registration page. Use your USFans account for orders, payment and warehouse access.', 'register'],
  ['Where does spreadsheet search go?', 'The search box sends the term to CNFansSP. Try Jersey to see results from the main catalog, then open a result to see its marketplace link.', 'search'],
  ['Where does a product card take me?', 'The image, name and detail link open the corresponding CNFansSP listing. Follow the original seller link there when you need to verify the source.', 'product'],
  ['Can I enter a seller link directly?', 'Yes. Paste the full marketplace product URL into the USFans search bar and verify the imported item before submitting your order.', 'guide'],
  ['Which ID identifies Jersey-60?', 'CNFansSP uses 6667 for the catalog page. Its original Weidian listing uses item ID 7632511460. Retain the marketplace and its item ID together.', 'product'],
  ['How do I check a size before paying?', 'Read the seller’s measurement chart and compare it with a similar garment laid flat. Confirm which unit and measuring points the seller uses, then select the matching size.', 'guide'],
  ['How can I specify a color or option?', 'Select the option in the imported listing. If several labels look similar, use the order remarks to describe the exact color or option you expect.', 'guide'],
  ['What if the seller link does not load?', 'Open the original marketplace URL to see whether the listing still exists. If it does, paste the full URL again and contact USFans if the import still fails.', 'guide'],
  ['Can I ask about an order after submitting it?', 'USFans documents an Order Enquiry option during purchasing. Include the order and the exact option or change you need so the agent can check it.', 'guide'],
  ['Where can I see my QC photos?', 'After inspection and storage, open Warehouse in the USFans User Center and choose the corresponding order to review its photos.', 'guide'],
  ['What should I look for in QC photos?', 'Compare the selected color, visible labels and obvious defects with the seller listing. Ask for a specific additional view if the available photos cannot answer your question.', 'guide'],
  ['Do all marketplace orders use the same inspection rules?', 'USFans says purchases from 1688 have different inspection standards. Check the inspection scope for the marketplace and item before relying on a particular check.', 'guide'],
  ['Can I combine orders into one parcel?', 'USFans supports consolidating items in its warehouse. Select the eligible stored items when submitting a parcel and compare the available routes.', 'about'],
  ['How long can I leave an item in storage?', 'USFans publishes separate storage periods for shopping-agent and forwarding parcels, measured from the Warehoused status. Check that policy and your item’s deadline before waiting for other orders.', 'storage'],
  ['Is the shipping estimate the final charge?', 'USFans can weigh and measure the packed parcel after submission. The final billed weight can differ from the estimate, so review the settled charge in your account.', 'weight'],
  ['What does volumetric weight mean?', 'It is a billing weight calculated from the parcel’s dimensions under a route’s rules. Compare it with scale weight and review which figure your route uses.', 'help'],
  ['Can packaging affect the shipping price?', 'Yes. Once packed, a parcel can differ in size and weight from the estimate. Compare any requested packaging changes with the protection the items need.', 'weight'],
  ['How can I check whether an item is eligible for shipping?', 'Review the USFans purchase notice and shipping restrictions before ordering. Eligibility can depend on the item, destination and route. Ask USFans if the rules are unclear.', 'sample'],
  ['How do I request a return from the warehouse?', 'Contact USFans promptly with the order number, problem and relevant photos. Seller conditions, timing and packaging can affect the options USFans can arrange.', 'terms'],
  ['Where do I track my international parcel?', 'After dispatch, open the parcel record in USFans and take the tracking number to the listed carrier if available. The Help Center covers tracking and follow-up.', 'help'],
  ['What should I keep if a delivered parcel has an issue?', 'Save the parcel number, label, outer packaging photos and photos of the issue. Describe the discrepancy and contact USFans through its published support channel.', 'contact'],
  ['Does QC guarantee authenticity?', 'Warehouse photos can document visible condition and details. USFans’ terms explain the limits of its role and what it can confirm about third-party products.', 'terms']
];

export const articles = [
  {
    slug:'usfans-spreadsheet', title:'How to use a USFans spreadsheet', keyword:'USFans spreadsheet',
    summary:'Find a product on CNFansSP, verify the seller and carry the correct link into USFans.',
    sources:['search','product','guide'],
    sections:[
      ['Start with a search you can narrow','Search for a product type such as Jersey, then add a distinctive feature if you have too many results. On this spreadsheet, search opens CNFansSP, so the results follow its catalog. If you only know a broad family of products, open a category first and compare the records there.'],
      ['Save the identity of each candidate','Open the detail page and note the source marketplace and seller link. Keep your preferred option with that link, especially if you are comparing listings with similar photos. Jersey-60 is a concrete example: CNFansSP page 6667 links to Weidian item 7632511460. Your shortlist should keep both the catalog reference and the seller reference.'],
      ['Recheck the listing in USFans','Paste the original seller URL into USFans or use the verified purchase button when the spreadsheet shows one. Compare the product title, seller, photos and selected option with your shortlist. Check the displayed amount again before paying. The catalog card is a convenient starting point while the live order page has the option you are actually submitting.']
    ]
  },
  {
    slug:'how-to-order', title:'How to order on USFans from a seller link', keyword:'how to order on USFans',
    summary:'Import a product link, check the variant and follow your order to the warehouse.',
    sources:['guide','register'],
    sections:[
      ['Import the exact listing','Register on USFans and paste the original seller URL into the search field. Open the imported item and compare its shop, title and photos with the marketplace page. If the item looks different, pause and verify the URL instead of picking a visually similar result.'],
      ['Write down the choices that matter','Choose size, color and quantity on the product page. When the seller offers similar options, describe the exact one in the remarks. For a jersey that might mean specifying the color and whether you expect a plain back. Confirm the order summary and any extra services you selected before proceeding.'],
      ['Follow it through the warehouse','The official beginner guide describes purchase, inspection and international shipment as separate stages. Use Order Enquiry if the agent needs to verify a choice during purchase. When the item appears in Warehouse, inspect your own photos and decide whether to keep it before selecting international shipping. If there is a discrepancy, use the order number and state the requested resolution.']
    ]
  },
  {
    slug:'weidian-links', title:'How to open a Weidian link on USFans', keyword:'USFans Weidian link',
    summary:'Use the original Weidian URL to verify that an imported product is the same listing.',
    sources:['product','sample','guide'],
    sections:[
      ['Use the original seller URL','Open the product’s CNFansSP detail and use its Weidian link. The marketplace URL contains the itemID value. Copy the complete URL when you paste it into USFans, particularly when the listing name is generic or multiple sellers use the same photos.'],
      ['Compare both identifiers','For Jersey-60, CNFansSP uses the page path /AllProducts/6667.html, while the source lists Weidian item ID 7632511460. The USFans direct URL for that Weidian listing uses /product/3/7632511460. Keeping the catalog URL beside the seller ID makes it easier to retrace the link later.'],
      ['Check the import before choosing a variant','On the USFans page, compare the seller, photos and details against the source. Look at the selected color and size after changing options, since a default selection can differ from the cover image. If importing the seller link still fails, save the original URL and ask USFans whether it can process the listing.']
    ]
  },
  {
    slug:'taobao-1688', title:'Ordering Taobao and 1688 listings through USFans', keyword:'USFans Taobao 1688 agent',
    summary:'Compare purchase quantities, variant details and inspection scope before ordering.',
    sources:['guide','help'],
    sections:[
      ['Start from the marketplace listing','Copy the product URL from Taobao or 1688 and paste it into USFans. Compare the seller and option images after import. If the original is a share link, confirm that it resolves to the specific item page rather than a seller’s storefront.'],
      ['Read the quantity and unit together','Check the listing’s minimum quantity and what a single unit includes. On a multi-piece listing, one option may represent a set and another may represent one item. Build the cart with the exact combination you intend to buy and compare its total alongside the descriptions, rather than judging by the lowest visible price.'],
      ['Review the inspection scope','USFans’ beginner guide flags different inspection standards for 1688. If a measurement, model number or component is important, check whether that detail is covered and ask about additional inspection before relying on the default process. Keep screenshots or notes of the option and any seller measurements so you can compare them when the parcel reaches the warehouse.']
    ]
  },
  {
    slug:'qc-photos', title:'USFans QC photos and warehouse inspection', keyword:'USFans QC photos',
    summary:'Compare warehouse photos with your order and ask for a specific view when needed.',
    sources:['guide','sample','terms'],
    sections:[
      ['Open photos for the order you placed','Once USFans has inspected and stored the item, find the matching order in Warehouse. Begin with the listing photos and the option you chose. A photo from another purchase can help identify angles to request, but your order’s photos are the evidence for the unit sitting in your warehouse.'],
      ['Look for evidence you can act on','Check the visible size label, color, quantity and obvious damage. For a fit-sensitive garment, ask for a measurement with both tape endpoints visible. For a set, ask for one view that shows the expected pieces together. Lighting can affect color, so request a clearer image if a close color match matters.'],
      ['Resolve discrepancies before parcel submission','If you see a mismatch, save the photo and state what you ordered, what is visible and what you want checked. Ask whether the seller will accept an exchange or return before including the item in a parcel. The official terms describe limits on quality and authenticity guarantees.']
    ]
  },
  {
    slug:'shipping-estimate', title:'How to estimate USFans shipping costs', keyword:'USFans shipping calculator',
    summary:'Use destination, package dimensions and the route’s billing rules to interpret an estimate.',
    sources:['guide','help','weight'],
    sections:[
      ['Price a specific parcel','Start with the destination and the items you want to ship. Record the weights and use size estimates that include outer packaging. Compare available routes for that same parcel. A quote for a different destination or a different box size can be misleading even when the goods weigh the same.'],
      ['Check which weight the route bills','Some routes use parcel dimensions when calculating billable weight. A light but bulky box can therefore cost more than you would expect from the scale reading. Check the dimensions and the route’s rule before comparing quotes. Keep optional packaging services separate so you can see how much each contributes to the total.'],
      ['Reconcile the estimate after packing','The USFans help article explains how warehouse weighing and measuring can change the billed amount. Save the initial quote and review the final billing weight once the parcel is packed. If a difference remains unclear, share the quote and parcel number with support so it can identify the relevant charge.']
    ]
  },
  {
    slug:'warehouse-consolidation', title:'USFans warehouse storage and parcel consolidation', keyword:'USFans warehouse consolidation',
    summary:'Plan which items to combine by checking storage deadlines and packaged size.',
    sources:['guide','storage','about','weight'],
    sections:[
      ['Track arrivals by order','Record which items have reached the warehouse and which are still with the seller. Verify each order’s QC photos and mark whether it is ready to ship. USFans publishes different storage rules for agent purchases and forwarding parcels, so check the deadline from the item’s warehoused status before waiting on another order.'],
      ['Compare one parcel with separate shipments','Select the eligible items you want to consolidate and check the routes for the combined box. Then consider whether a bulky or fragile item changes the packaging or leaves fewer route options. Compare the available charges and protection for each shipment plan using the same destination.'],
      ['Confirm the parcel contents','Review the selected order lines, quantities and address before paying the parcel charge. If you request packaging changes, consider whether each item still has adequate protection. Save the final list of contents so you can identify what shipped when the parcel appears in tracking.']
    ]
  },
  {
    slug:'returns-exchanges', title:'USFans returns and exchanges before international shipping', keyword:'USFans returns and refunds',
    summary:'Document a sizing or condition problem and check seller terms while the item is in the warehouse.',
    sources:['terms','guide','contact'],
    sections:[
      ['Start with the order and the evidence','Open the USFans order and identify the issue precisely: a size label differs, a component is missing or damage is visible. Save the relevant warehouse photo with the order number. If the photo is unclear, identify the particular angle, label or quantity you need confirmed.'],
      ['Ask what the seller will accept','Use the order channel or official support to request the remedy you want. Ask which return or exchange conditions apply, what packaging needs to be kept and what charges may apply. USFans’ agreement describes a return window with conditions, so check the current terms promptly after noticing a problem.'],
      ['Wait for the outcome before shipping the item','Keep the disputed item out of your parcel while the case is open. If the seller agrees to an exchange, check the replacement’s own QC photos before shipping. If a refund is approved, compare the confirmed amount and any disclosed fees with the record in your account.']
    ]
  },
  {
    slug:'parcel-tracking', title:'USFans parcel tracking after dispatch', keyword:'USFans tracking',
    summary:'Follow the parcel record, distinguish carrier updates and prepare a clear support request.',
    sources:['help','guide','contact'],
    sections:[
      ['Find the parcel record','Open the dispatched parcel in your USFans account and save the parcel number and any carrier tracking number it displays. If you ordered several products, confirm that the parcel contains the expected order lines. You can then compare USFans’ record with the carrier’s tracking page for that number.'],
      ['Read events in order','Record the date and wording of the latest scan and look for a handoff to a different carrier or an instruction requiring action. If you see an exception or the parcel seems stalled, check the route and most recent information before contacting support. Avoid treating a gap between scans as proof of loss.'],
      ['Report a problem with a short timeline','Give support the parcel number, the carrier’s last status and when it occurred. If the parcel arrived damaged, save the outer packaging, label and photos showing the issue. This gives support a way to identify the shipment and understand the specific help you need.']
    ]
  },
  {
    slug:'order-costs', title:'USFans order costs from checkout to shipping', keyword:'USFans fees and shipping cost',
    summary:'Build a cost comparison that accounts for the product order and the later international parcel.',
    sources:['guide','about','weight'],
    sections:[
      ['Capture the selected item price','Record the product amount only after choosing the correct option and quantity on USFans. A CNFansSP card helps you find the listing, while an option, quantity or seller update can affect the amount on the order page. Add any local delivery charge shown for getting the item to the warehouse.'],
      ['Separate optional services from transport','List any inspection or packaging add-ons you select. Estimate international shipping with the destination and a realistic packed size. Compare alternative routes using the same box assumptions. If you are comparing two sellers, include differences in quantity and packaging that could change the later parcel cost.'],
      ['Check the amounts again before each payment','Review the product checkout first, then the parcel submission once all items are ready. The packed parcel’s billed weight can differ from an earlier estimate. Keep a record of both charges and any balance adjustments, so you can see which stage changed and ask support a specific question if needed.']
    ]
  }
];

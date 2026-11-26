const guide = 'https://www.usfans.com/beginner-guide';
const home = 'https://www.usfans.com/';
const warehouse = 'https://www.usfans.com/help/HCON_STATIC_071';
const weight = 'https://www.usfans.com/help/HCON_STATIC_053';
const weidian = 'https://www.usfans.com/product/3/7687857242';
const taobao = 'https://usfans.com/product/2/573254630703';
const wholesale = 'https://www.usfans.com/product/1/810409276945';

export const articles = [
  {
    slug: 'usfans-shipping-calculator',
    title: 'USFans shipping calculator: from estimate to final parcel cost',
    summary: 'Compare shipping lines using the destination, packed measurements and billing weight.',
    sources: [[weight, 'USFans billing weight guide'], [guide, 'USFans beginner guide']],
    sections: [
      ['Start with the destination and the packed parcel', 'Use the actual destination country and the dimensions of the intended outer carton. Before the warehouse packs it, record item weights and your packaging choices as estimates. Retaining shoe boxes or combining several bulky items can change the dimensions.'],
      ['Compare quotes on the same inputs', 'Run each eligible line against the same destination, weight and dimensions. Record the estimate, allowed item types and any add-ons you selected. If a line disappears after you enter the measurements or product type, reconsider the packaging or compare another available line.'],
      ['Reconcile the final charge', 'USFans describes a difference between the weight estimated at parcel submission and the actual billed weight after processing. Keep the original quote and compare it with the final parcel record. Its billing-weight help page explains how extra postage or an overcharge is handled.'],
    ],
  },
  {
    slug: 'usfans-qc-photos',
    title: 'How to review USFans QC photos before shipping',
    summary: 'A checklist for checking the size, color and condition of the item in your warehouse.',
    sources: [[guide, 'USFans inspection guidance']],
    sections: [
      ['Confirm that the photos show your order', 'Open the warehouse record and match the seller, item and variant to your order. Start with a clear label or packaging photo where available. Seller gallery photos help identify the expected style. Your warehouse images show what arrived for your order.'],
      ['Check details you can verify visually', 'Look for the selected color and size label, then compare the number of pieces and visible condition. For an item where fit matters, look for a flat measurement photo and check its tape placement against the seller’s chart. Request a clearer view if the key detail is hard to read.'],
      ['Resolve discrepancies before parcel submission', 'Record the order number and the photo that shows the problem. Describe the difference in one sentence, such as a size label that differs from the selected variant. Contact USFans through the order and check the applicable after-sales terms before adding the item to an international parcel.'],
    ],
  },
  {
    slug: 'how-to-order-from-usfans',
    title: 'How to order from USFans using a spreadsheet link',
    summary: 'Follow one listing from the CNFansSP catalog through USFans checkout and warehouse review.',
    sources: [[guide, 'USFans purchase walkthrough'], [home, 'USFans official site']],
    sections: [
      ['Find the original listing', 'Search the CNFansSP catalog for the product type or open the relevant category. On the main-site detail page, identify the original marketplace link. Keep the seller and listing together so you can confirm the item when USFans loads it.'],
      ['Check the options before paying', 'Paste the original listing URL into the USFans search field. Compare the seller and pictures with the original listing. Select the variant and quantity on USFans, then review the local delivery amount and cart total before submitting the order.'],
      ['Review before international shipping', 'USFans describes a warehouse inspection stage after purchase. Open the warehouse record, review the photos and check that the item matches your selected options. Once ready, select the items you want to ship and review the available parcel lines for your destination.'],
    ],
  },
  {
    slug: 'usfans-weidian-taobao-1688-links',
    title: 'USFans product links for Weidian, Taobao and 1688',
    summary: 'Match the marketplace and item ID to the product page before choosing a variant.',
    sources: [[weidian, 'Official Weidian route example'], [taobao, 'Official Taobao route example'], [wholesale, 'Official 1688 route example']],
    sections: [
      ['Identify the original marketplace', 'Use the host of the original marketplace listing to identify the source. A saved screenshot or number alone can leave the source ambiguous. Keep a copy of the seller link and verify that it leads to one specific item.'],
      ['Read the USFans product route', 'The official examples use the format /product/{channel}/{itemId}. In those examples, channel 1 opens an 1688 listing, 2 opens a Taobao listing, and 3 opens a Weidian listing. For a catalog integration, use the source and ID from the same product record.'],
      ['Recover a link that fails to load', 'Open the seller link first. If a marketplace listing is available, paste its full URL into the USFans search box. Compare the loaded seller and variants before paying. A route that opens without options still needs a fresh check of the original listing and availability.'],
    ],
  },
  {
    slug: 'usfans-size-chart-guide',
    title: 'USFans sizing guide: compare measurements before ordering',
    summary: 'Use the seller chart and a garment you own to choose a size you can verify.',
    sources: [[guide, 'USFans guide to choosing product options and reviewing QC']],
    sections: [
      ['Pick a reference you already own', 'Lay a similar garment flat. For a T-shirt, measure chest width from seam to seam and body length from a consistent shoulder point to the hem. For pants, follow the seller’s measuring method for waist and inseam. Record dimensions rather than relying on the tag.'],
      ['Read units and measurement definitions', 'Check whether chest means flat width or full circumference. If the table uses centimetres and your tape is in inches, multiply inches by 2.54. Compare measurements tied to fit, such as chest and length for tops.'],
      ['Verify the selected variant twice', 'Check the selected size and color in the USFans cart. If the warehouse photos include a measurement, make sure it uses the same start and end points as the seller’s chart. Ask about meaningful differences before international dispatch.'],
    ],
  },
  {
    slug: 'usfans-warehouse-storage',
    title: 'USFans warehouse storage: track the arrival and expiry dates',
    summary: 'Understand the published storage windows and plan when to submit a parcel.',
    sources: [[warehouse, 'USFans warehouse storage terms'], [guide, 'USFans warehouse overview']],
    sections: [
      ['Start the clock at warehousing', 'The official help page lists a 90-day window for purchasing-agent parcels and 60 days for forwarding parcels. It says the storage duration is counted from the Warehoused status. Check the current help page and the date shown in your own warehouse record.'],
      ['Track the earliest expiry when waiting for other items', 'Keep a simple list of your warehouse items and arrival dates. If several orders will ship together, plan around the first expiry. Leave time for photo review, questions about variants, and parcel packing.'],
      ['Decide what to do with an item before the deadline', 'Look at the current order status and available options in the user center. If an item is delayed, compare the cost and timing of shipping separately with the time remaining on your stored items. Ask support about options while the record is still active.'],
    ],
  },
  {
    slug: 'usfans-consolidate-haul',
    title: 'How to consolidate a USFans haul into one parcel',
    summary: 'Group warehouse items by readiness, shipping restrictions and packed dimensions.',
    sources: [[guide, 'USFans parcel submission guide'], [weight, 'USFans billing weight reference']],
    sections: [
      ['Group only the items ready to ship', 'In your warehouse, check that the items have arrived and that you have reviewed the photos. Set aside anything awaiting an after-sales response. For the rest, note which items need protective packing or have unusual dimensions.'],
      ['Compare a single parcel with a split', 'Estimate the outer dimensions and weight of the combined parcel, then compare eligible shipping lines with a rough split option. A large item may affect eligibility or shipping cost for everything else. Keep the chosen destination the same across both quotes.'],
      ['Review the packed order summary', 'Confirm the warehouse items, shipping address and requested services before paying for delivery. Save the parcel reference so you can match the final billing weight and later check tracking.'],
    ],
  },
  {
    slug: 'usfans-returns-and-exchanges',
    title: 'USFans returns and exchanges: what to check before dispatch',
    summary: 'Use the order record and the applicable seller terms to handle a mismatch.',
    sources: [[guide, 'USFans order enquiries'], ['https://www.usfans.com/product/3/7719230381', 'Official product-page after-sales example']],
    sections: [
      ['Find the rule that applies to your item', 'Open the order and read its after-sales information, including any seller-specific conditions. Start promptly when you notice a mismatch. A deadline displayed on one product page does not establish the rule for every seller or category.'],
      ['Send evidence the agent can act on', 'Record the selected variant, the order number and the warehouse image showing the difference. Say whether you want a return or a replacement, and ask which fees and deadlines apply before confirming an action.'],
      ['Wait for the order status to reflect the outcome', 'Keep the item out of an international parcel while the issue is open. If a replacement is arranged, review the new warehouse photos and confirm the corrected variant before shipping. Keep the messages and any updated charges with your order record.'],
    ],
  },
  {
    slug: 'usfans-track-parcel',
    title: 'How to track a USFans parcel after dispatch',
    summary: 'Use the parcel number, carrier tracking number and the latest dated scan.',
    sources: [[guide, 'USFans shipping workflow'], [home, 'USFans support entry']],
    sections: [
      ['Find the parcel record', 'Open your submitted parcel in USFans. Keep the parcel number for support and copy the carrier tracking number when shown. These references can differ from the item order number used while the seller ships to the warehouse.'],
      ['Read the status in sequence', 'Check the time and location of the latest scan. If the line shows a destination carrier or a separate last-mile number, use that number with the named carrier. Save the latest dated scan if you need to explain a tracking gap.'],
      ['Prepare a specific support request', 'If the tracking remains unclear beyond the timeframe shown for your line, include the parcel number, carrier number, latest scan and destination country. Ask which carrier currently has the parcel or whether any action is required from you.'],
    ],
  },
  {
    slug: 'usfans-taobao-1688-weidian',
    title: 'Taobao, Weidian or 1688: comparing listings for USFans',
    summary: 'Compare purchase quantity, exact variants and local delivery before you choose a seller.',
    sources: [[guide, 'USFans marketplace purchasing guide'], [wholesale, '1688 official product-page example'], [weidian, 'Weidian official product-page example']],
    sections: [
      ['Compare the same variant and quantity', 'Record each seller’s exact style, color and size before comparing prices. On listings with quantity rules, check whether the quoted price applies to a single unit or only to a larger order. Confirm which variants can actually be selected.'],
      ['Compare the landed decision in stages', 'First compare item price and Chinese local delivery at the chosen quantity. Then consider any observable difference in item size or packing that might affect the later international quote. Keep those two stages separate so the lower listing price does not hide a higher overall cost.'],
      ['Use the source listing again at checkout', 'Open the source URL before finalizing the cart to check stock and the variant. The official guide says products purchased from 1688 have different quality-control standards. Check the current information for the source you choose and review the resulting photos in your warehouse.'],
    ],
  },
];

export const faq = [
  ['Where can I estimate USFans shipping?', 'Use the International Shipping Estimate entry on USFans. Enter your destination and the best available parcel measurements, then compare eligible lines.', weight],
  ['Where do I see my USFans QC photos?', 'Open User Center and Warehouse after your purchase arrives and is inspected. Look up the matching item record.', guide],
  ['How do I order from this USFans spreadsheet?', 'Open the item in the CNFansSP catalog, copy the original seller URL and paste it into USFans to review options and order.', guide],
  ['What is a USFans spreadsheet?', 'It is a searchable catalog of listings you can use to find a seller link for a purchase through USFans.'],
  ['Where does the catalog come from?', 'Listings, categories, images and displayed prices come from CNFansSP. Titles follow the original catalog.'],
  ['How does the search box work?', 'Enter a product keyword and submit. The corresponding search results open on CNFansSP.'],
  ['Where do category and product cards go?', 'Categories open the matching CNFansSP category and product cards open the original CNFansSP detail page.'],
  ['Where do I create a USFans account?', 'Use Join USFans in the header to open the official registration page.', 'https://www.usfans.com/register'],
  ['Can I paste a seller link into USFans?', 'Yes. The official beginner guide describes pasting the product link into the USFans search bar.', guide],
  ['Which marketplaces appear in USFans links?', 'USFans publicly shows Taobao, Weidian and 1688 product pages. Check the source and ID from the original listing.', home],
  ['Can I use only the numeric product ID?', 'Keep the marketplace with the ID. The product route also needs the marketplace channel.', weidian],
  ['What if the USFans link opens without a product?', 'Check whether the original seller listing opens and paste that complete URL into the official USFans search bar.', guide],
  ['How do I choose size and color?', 'Read the seller’s size chart, select the variant on USFans and confirm the same option in the cart.', guide],
  ['When do I pay international shipping?', 'The official workflow separates the initial purchase from the later parcel submission and shipping payment.', guide],
  ['What if the seller sends the wrong variant?', 'Save the warehouse photo and selected option, then contact USFans through the order while the item is still in storage.', guide],
  ['Can I combine orders in one parcel?', 'Select the warehouse items you want to submit together and check the eligible shipping lines for the combined parcel.', guide],
  ['How long can items remain in storage?', 'The official help page lists 90 days for purchasing-agent parcels and 60 for forwarding parcels, starting at Warehoused.', warehouse],
  ['Why can billed weight differ from the estimate?', 'The initial quote uses estimated packaging weight. USFans explains how the final billing weight is reconciled after processing.', weight],
  ['Can I return an item from the warehouse?', 'Check the after-sales conditions for the specific order and seller, and contact the agent promptly while the item is in storage.', 'https://www.usfans.com/product/3/7719230381'],
  ['Are the catalog prices final?', 'Use the detail page and your USFans checkout to confirm the selected option, price and domestic delivery. International shipping is handled at parcel submission.', guide],
  ['Where should I ask a question about an active order?', 'Use the official Order Enquiry entry for the affected order and include its reference.', guide],
  ['How do I track a parcel?', 'Open the submitted parcel in USFans, then use the tracking number with the carrier shown on the parcel record.', guide],
  ['Do I need to translate a product title to purchase it?', 'Keep the original seller link and verify the variant on its detail page. The language menu translates the preview interface.'],
  ['Where can I check shipping restrictions?', 'Review the restrictions and eligible lines shown by USFans for the destination and item type before submitting your parcel.', home],
];

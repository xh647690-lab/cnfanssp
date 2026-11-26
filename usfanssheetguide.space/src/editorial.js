const officialGuide = 'https://usfans.com/beginner-guide';
const officialHelp = 'https://usfans.com/help';
const linkReference = 'https://usfansbuys.com/articles/usfans-product-links-explained/';
const faqGroups = [
  ['Finding products',[
    ['spreadsheet','What is the USFans spreadsheet?','It is a directory for browsing goods. This preview displays the live CNFansSP catalog. Open the product detail to see the source information.'],
    ['search','Where does the search box go?','Search opens the matching results page on CNFansSP. Use the product name or a short description if a seller ID returns nothing.'],
    ['categories','Can I browse by category?','Yes. Category links open the corresponding CNFansSP pages, where you can continue browsing the full category.'],
    ['price','Is the directory price the checkout total?','Use the listing price as a starting point. Review your selected variant, domestic delivery and any checkout charges, then budget for international shipping separately.'],
  ]],
  ['Links and accounts',[
    ['registration','Where do I register for USFans?','Use Join USFans in the header to open the official registration page. A USFans account is used for orders and parcels.'],
    ['source-link','What link should I paste into USFans?','Use the original marketplace listing URL from the product details when available. USFans describes link pasting in its official beginner guide.'],
    ['product-id','Is a CNFansSP page ID a seller product ID?','Treat them as separate identifiers. Find the marketplace URL in the source record before constructing or sharing a USFans purchase link.'],
    ['dead-link','What if a USFans product link will not load?','Try the original marketplace URL in USFans search, then check whether the seller listing still exists and offers your variant.'],
  ]],
  ['Ordering and sizing',[
    ['first-order','What are the stages of a first order?','Choose the listing and variant, submit and pay for the item, review it in the warehouse, then create and pay for the international parcel.'],
    ['variant','What should I check before paying?','Confirm the seller, color, size, quantity and product options on the live page. Keep a record of unusual instructions or measurements.'],
    ['size-chart','Which size chart should I use?','Use the chart attached to the exact seller listing and compare its measurements with an item you already own. Check units and measurement points.'],
    ['payment','Where do I see available payment methods?','Use the checkout screen for your order and currency. Check the total and any fees displayed before submitting payment.'],
  ]],
  ['Warehouse and QC',[
    ['qc','What are warehouse QC photos?','They document the item received at the warehouse. Check visible details and measurements against your order while the item is still there.'],
    ['photo-type','How do seller photos differ from warehouse QC photos?','Seller photos describe the listing. Warehouse photos show the item received for a particular order. Use each for its corresponding stage.'],
    ['extra-photos','Can I request a closer photo?','Check the order or ask support for available photo services, turnaround and charges. Request the specific angle or measurement you need.'],
    ['storage','How can I check the warehouse storage deadline?','Open the stored item in USFans and check its deadline and current policy in the account or help center before waiting for more orders.'],
  ]],
  ['Shipping and tracking',[
    ['estimate','How do I estimate international shipping?','Use the estimator in USFans with the correct destination and a plausible packed weight and size. Recheck the quote with the actual parcel details.'],
    ['volumetric','Why do parcel dimensions affect the shipping quote?','Some routes use volumetric weight. Enter the packed dimensions and use the selected route’s divisor, minimums and rounding rules.'],
    ['consolidation','Should I ship multiple items together?','Compare consolidated and separate quotes after checking item restrictions, packed dimensions and route eligibility.'],
    ['tracking','Where should I look for tracking?','Open the parcel in your USFans account and use its tracking number or carrier link once assigned. Keep the parcel ID for support.'],
  ]],
  ['Exceptions and support',[
    ['returns','How do I request a return or exchange?','Open the order and check the current return terms, deadline and available actions. Tell support what differs and attach relevant order or QC evidence.'],
    ['mismatch','What if the warehouse photos show the wrong item?','Keep the item in the warehouse while you contact support. Provide your selected variant and point to the specific discrepancy in the photos.'],
    ['restricted','What if the shipping route rejects an item?','Check the route’s current restrictions and ask USFans about eligible services. Keeping the product description accurate helps support evaluate it.'],
    ['support','What information should I send to USFans support?','Send the order or parcel ID, the latest status and date, and the action you need. Include the relevant screenshot or measurement when useful.'],
  ]],
];

const articles = [
  ['usfans-spreadsheet','How to use a USFans spreadsheet','Find the original listing and keep track of the exact item you want.',officialGuide,[
    ['Search the catalog','Begin with a concrete term such as “hoodie” or “jersey”. Open the result on CNFansSP and compare the photos, listing title and any size information before shortlisting it. If a long query misses, use a shorter product name or browse the matching category.'],
    ['Keep the original listing','Copy the marketplace URL from the product details when available. Record the seller and selected variant alongside it. A catalog page can help you find an item again, while the marketplace URL is what USFans needs to look up the seller listing.'],
    ['Check the live purchase page','Paste the marketplace URL into USFans search. Compare the title, photos and options to your notes. Recheck the selected variant and price before ordering, especially when you saved the listing earlier.'],
  ]],
  ['usfans-product-links','USFans product links and marketplace IDs','Read the marketplace code and preserve the seller ID when opening a listing.',linkReference,[
    ['Read the route','A common USFans product route is /product/{channel}/{id}. The documented format uses 1 for 1688, 2 for Taobao and 3 for Weidian. Check the original listing host before choosing a channel.'],
    ['Keep the identifiers separate','The number on a CNFansSP detail URL can identify an internal catalog page. For a Weidian listing, take itemID from the seller URL. For example, use /product/3/7632511460 only after verifying that the original listing uses that Weidian ID.'],
    ['Recover a broken link','Open the original seller URL or paste it into the official search box. If the seller listing has changed, compare the result’s seller and selected variant before ordering. A referral parameter is separate from the product identifier.'],
  ]],
  ['how-to-order','How to order on USFans','Follow the order from the seller listing to the international parcel.',officialGuide,[
    ['Select and submit','Open your marketplace listing in USFans and choose the exact color, size and quantity. If a product uses unconventional sizing or custom instructions, keep them with the order record before selecting Buy Now or adding to the cart.'],
    ['Review the item purchase','Check the item amount and domestic delivery in the payment review. After submitting the order, follow updates in your account and keep the seller listing handy if a variant needs clarification.'],
    ['Review and ship','Once the warehouse receives the goods, review available inspection photos. Select the goods for the international parcel only after resolving discrepancies, then confirm the destination, route and parcel quote.'],
  ]],
  ['usfans-size-chart','How to read a seller size chart on USFans','Choose dimensions that match your clothes or shoes at home.',officialGuide,[
    ['Compare like for like','Measure a similar garment laid flat and record the units. If a listing provides flat chest width, compare it with flat chest width at home. If it provides circumference, compare against circumference.'],
    ['Use the chart for the selected listing','A size label can represent different measurements across listings. For a jacket check chest, shoulder and sleeve. For shoes confirm whether the seller’s length refers to foot length or the removable insole.'],
    ['Check uncertainty before shipment','If two sizes look plausible, use your desired fit and the tolerance stated by the seller. If a measurement could change the decision, use the USFans order channel to ask what measurement or photo is available.'],
  ]],
  ['usfans-checkout','USFans item prices and checkout costs','Separate item, domestic delivery and international parcel costs.',officialGuide,[
    ['Record the item total','Check the exact SKU and quantity before using the amount in your budget. A listing’s starting price can describe a different option. Review the domestic delivery and fees displayed for the order.'],
    ['Estimate the parcel separately','At this stage the actual packed weight and dimensions may be unknown. Estimate shipping separately and let the eventual warehouse parcel quote replace the estimate when those measurements are available.'],
    ['Compare the same currencies','Keep both amounts in the same currency when judging alternatives. Use the live review totals when deciding to pay, and store the breakdown if you need to reconcile the order later.'],
  ]],
  ['usfans-warehouse','USFans warehouse storage and consolidation','Plan which items to combine and when to submit a parcel.',officialHelp,[
    ['Check items individually','Identify which pieces are actually stored and which are still in transit. Check the storage deadline for each stored item before holding the whole group for a late seller.'],
    ['Compare parcel plans','Make one candidate list for a consolidated parcel and another for separate parcels. Test plausible weights and dimensions and check whether all goods can travel on the same route. A bulky box may influence the shipping quote.'],
    ['Submit only eligible goods','Resolve QC and return questions before including an item. When comparing results, use the destination, measured parcel dimensions, eligible routes and total quote shown at the time of submission.'],
  ]],
  ['usfans-tracking','How to track a USFans order and parcel','Use the right identifier for the order stage you are tracking.',officialGuide,[
    ['Find the right record','Before outbound shipment, check the order and its seller or warehouse updates. After you create a parcel, switch to the parcel record and keep the parcel ID separate from the seller order number.'],
    ['Read carrier events in context','Compare the last status, timestamp and carrier details. An assigned number and a carrier scan are two different events. For multi-item shipments, verify that the parcel contains everything you expect.'],
    ['Contact support with evidence','If the update stalls or conflicts with the order, send the relevant record ID, the latest event and date, and a clear description of the discrepancy. Keep the carrier reference with the parcel number.'],
  ]],
  ['usfans-qc-photos','How to review USFans QC photos','Inspect the selected item before it leaves the warehouse.',officialGuide,[
    ['Start with identity','Compare the color, variant label and quantity with your order. Keep seller listing photos beside the inspection photos so you can match visible details without relying on memory.'],
    ['Inspect the details that affect your decision','For footwear, look at both shoes, size markings and the soles. For garments, check seams, fasteners and relevant measurements. If glare or perspective obscures a detail, request a named angle or measurement where available.'],
    ['Act while it is stored','Save the image showing a discrepancy and include the selected variant when you contact support. Check the item’s return window and eligibility before adding it to an outbound parcel.'],
  ]],
  ['usfans-shipping-calculator','How to estimate USFans shipping costs','Compare quotes with packed dimensions and the route’s billing method.',officialGuide,[
    ['Enter realistic inputs','Use the destination and your best estimate of the packed weight and dimensions. A garment’s listed weight alone does not account for the box or packaging. Use warehouse measurements when available.'],
    ['Compare chargeable weight','A route may bill by actual weight, volumetric weight or whichever applies under its rules. Use the divisor and rounding defined for that particular route. Compare cost, eligibility and available services using the same inputs.'],
    ['Recheck the actual parcel','Save the estimates for comparison and run them again after packing. Review the final amount and selected route before authorizing international shipment.'],
  ]],
  ['usfans-returns','How to request a USFans return or exchange','Gather order details and check eligibility while the item is at the warehouse.',officialHelp,[
    ['Locate the affected order','Open the item record and check current eligibility, any deadline and the available return or exchange action. If the seller sent the wrong size, identify both the ordered label and the label visible in QC.'],
    ['Send a precise request','Use the order channel to state whether you want an exchange or return. Attach the relevant photograph and ask support to confirm any fees or seller conditions before you choose the next action.'],
    ['Track the outcome','Keep the item out of outbound packing while the request is reviewed. Follow the order status until USFans confirms completion and check the actual refund or replacement record in your account.'],
  ]],
];

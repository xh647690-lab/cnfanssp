export const mainCatalog = 'https://www.cnfanssp.com/AllProducts/';
export const help = 'https://litbuy.com/help';
export const estimator = 'https://litbuy.com/estimation';
export const guides = [
  ['how-to-buy', 'How to buy with LitBuy', 'From the spreadsheet to your first warehouse order.', help, [
    ['Find a listing', 'Search the spreadsheet by item type or name. The results open on CNFansSP, where you can inspect the listing and locate its original marketplace link when available. Compare the item photos and description with the seller page before deciding.'],
    ['Place the product order', 'Open the original listing in LitBuy by pasting its marketplace link into the search field. Check the exact colour, size and quantity shown in the cart. If you are choosing between options with similar names, keep a copy of the seller’s option label or screenshot so you can refer to it later.'],
    ['Check the warehouse arrival', 'Follow the product order in your LitBuy account. Once inspection photos are available, compare them with the option you ordered. If you spot a mismatch, contact support with the relevant order reference before submitting the item for international shipping.'],
    ['Submit the parcel', 'In the warehouse, select the items you want to send. Check which routes are offered for your address and parcel, review the packing choices and confirm the shipment total. Keep the parcel reference for tracking after dispatch.'],
  ]],
  ['spreadsheet-search', 'How to search the LitBuy spreadsheet', 'Find the matching CNFansSP listing and verify its original source.', mainCatalog, [
    ['Search by item type first', 'Use the words most likely to appear in a catalog title, such as jersey or jacket. Try a shorter phrase if a long query returns few matches. The search form sends your term to CNFansSP, where you can open the matching catalog records.'],
    ['Use categories to compare alternatives', 'A category page is useful when you are flexible about the exact listing. Open a few results and compare the original seller links rather than relying on thumbnail similarity. Two photos can look alike even when they represent different sellers or options.'],
    ['Save the source link', 'Keep the original marketplace URL along with the size or colour you want. The CNFansSP detail address and the marketplace item ID serve different purposes. If you return to a listing later, recheck the seller’s current options and confirm the link still resolves before ordering.'],
    ['Check the route in LitBuy', 'Paste the marketplace URL into LitBuy. Compare the loaded item and seller with your saved record. If the page fails to open, check whether the original listing still exists before treating the issue as an agent-side error.'],
  ]],
  ['product-links', 'LitBuy links for Taobao, Weidian and 1688', 'Identify the marketplace and troubleshoot a product link.', 'https://litbuy.com/goods', [
    ['Identify the marketplace', 'Copy the full product URL from the detail page. A marketplace name and item ID together identify the listing. For example, CNFansSP’s Jersey-60 record points to Weidian item 7632511460. The CNFansSP record itself has a separate address.'],
    ['Open and compare', 'Paste the original URL into LitBuy search. Compare the listing title, option labels and photos with the seller page. Save the source URL if you plan to revisit the item so you can verify it before paying.'],
    ['Diagnose an unavailable link', 'Open the original URL first. If it leads to a removed item or an error, search the catalog for another seller. If the original opens but the agent page fails, try copying the full URL again. Share the source link with LitBuy support if the problem persists.'],
    ['Compare order options', 'If LitBuy offers manual ordering for a listing, use the item description, variant and quantity from the current seller page. Review the platform’s terms for that order type before paying.'],
  ]],
  ['qc-photos', 'How to check LitBuy QC photos', 'Review your received item before submitting it for shipping.', help, [
    ['Start with the order record', 'Open the photos for your own warehouse item. Put the order’s variant, seller pictures and size chart next to the inspection set. This makes it easier to distinguish a product mismatch from a difference in lighting or camera angle.'],
    ['Check the details that matter to you', 'Compare the colour, visible condition, labels and included pieces. For a garment, compare visible measurements with the seller’s chart using the same points and units. Ask whether further inspection is available if a detail you need falls outside the photo frame.'],
    ['Document a mismatch', 'Save the option name, the order reference and the clearest photo. Point to the exact detail you want reviewed. For example, identify a missing accessory by name instead of sending an unlabelled image and asking support to find the issue.'],
    ['Decide before packing', 'Leave the affected item out of a parcel while the issue is being reviewed. Read the applicable after-sales terms and keep the response with your order record so you can track what happens next.'],
  ]],
  ['shipping-calculator', 'How to use the LitBuy shipping calculator', 'Compare routes using your destination and packed parcel details.', estimator, [
    ['Estimate before ordering', 'Open the official freight estimator and choose the destination. Use an approximate packed weight and dimensions while planning. If you are unsure whether a box will be included, compare two estimates so you can see how packing may affect the available routes.'],
    ['Compare the same parcel', 'Use the same inputs when comparing lines. Read the route’s own weight and size rules, any item restrictions, and the delivery estimate shown for your destination. Different rules can change which service is available even when two parcels weigh the same.'],
    ['Recheck after packing', 'Review the measured parcel details and the actual shipping options in your account. Product weight is only one input because protective packing adds weight or volume. Confirm the amount displayed on the parcel before submitting it.'],
    ['Record your choice', 'Save the chosen line, parcel reference and amount paid. Those details help when you later compare a tracking update or ask support about a charge.'],
  ]],
  ['parcel-packing', 'LitBuy parcel consolidation and packing', 'Choose which items to send together and what protection to keep.', 'https://litbuy.com/pages/account/warehouse', [
    ['Check what has arrived', 'Open your warehouse and verify which items are available. Keep unresolved QC or return requests separate. If you are waiting for a final item, check each stored item’s deadline in your account before delaying the parcel.'],
    ['Compare one parcel with two', 'Use the freight estimator with both packing plans. Check the route rules for your destination and item types. A larger box can affect the billable weight or move the parcel outside a line’s limits, so compare the actual options shown.'],
    ['Choose protection by item', 'Retain protection that serves a purpose, especially for crushable or fragile items. Before requesting box removal, consider what the original packaging protects and whether you still need it. Review the packing options offered by LitBuy for the parcel.'],
    ['Confirm the final list', 'Check the address, included items and route in the parcel submission screen. Keep a copy of the final parcel reference and item list. It gives you a useful record if an item is later reported missing.'],
  ]],
  ['warehouse-storage', 'LitBuy warehouse storage and order status', 'Read the warehouse deadline and plan around staggered arrivals.', help, [
    ['Distinguish orders and warehouse items', 'A paid order can still be moving from the seller to the warehouse. Check the product order for incoming progress and the warehouse record for items ready for the next step. Check for inspection results when reviewing an arrival.'],
    ['Find each storage deadline', 'The LitBuy Help Center advertises 90 days of free storage. Use the dates and rules shown in your account for a specific item. Items bought together can arrive separately, so record the oldest warehouse deadline if planning a combined parcel.'],
    ['Leave time for decisions', 'Review the first arrivals while waiting for the rest. If an item has a size or condition problem, raise it promptly. Checking early gives support time to review the issue before you decide which items to ship.'],
    ['Plan the shipment', 'Compare sending available items now with waiting for the remaining order. Consider the storage deadline, the estimated route cost, and how much extra packing space the incoming items may require.'],
  ]],
  ['size-chart', 'How to read a seller size chart on LitBuy', 'Match the seller measurements to a garment you already own.', help, [
    ['Choose a reference garment', 'Lay a similar garment flat on a firm surface. Measure the points used by the seller, such as chest width and back length. Note whether a number is a flat width or a full circumference, and convert units before comparing them.'],
    ['Compare the exact listing and option', 'Keep the seller chart for the version you chose. Similar products may use different charts. Read the chart notes for the measurement method and use both width and length to assess the fit you want.'],
    ['Save your selection', 'Record the seller option label with the size and colour. If the listing presents several models under one item link, verify the selected photo and label in the cart. Use the order remark only for details you need the agent to see.'],
    ['Review the received item', 'If warehouse photos show measurements, compare the same points against your saved chart. If the angle or placement makes a reading unclear, share the exact comparison you need when asking for assistance.'],
  ]],
  ['tracking', 'How to track a LitBuy parcel', 'Find the right reference for seller delivery or international transit.', help, [
    ['Check which stage you are tracking', 'Before the item reaches the warehouse, check the seller-side status on the product order. After you submit an international parcel, use that parcel’s separate record. The two movements can have different references.'],
    ['Read the latest scan in context', 'Write down the carrier shown, tracking identifier and timestamp of the most recent update. Compare it with the expected time shown for the selected line. When a local carrier takes over, use the identifier shown for that handover if one is provided.'],
    ['Prepare a useful support request', 'Provide the parcel reference, tracking identifier, last scan and destination. Describe whether the issue is a long gap, a failed delivery attempt or a delivery scan without a parcel. Keep the details together so support can locate the right shipment.'],
    ['Document an issue on delivery', 'If there is visible damage or a missing item, keep the label and packaging and photograph the condition. Follow the after-sales process through the relevant account record.'],
  ]],
  ['returns-and-refunds', 'LitBuy returns, exchanges and refunds', 'Which order details to gather and when to raise an issue.', help, [
    ['Identify what went wrong', 'A wrong option, a damaged warehouse item and a damaged international parcel are different requests. Start from the order or parcel record that matches the issue. Keep the seller option and photos together so the request can be reviewed.'],
    ['Act while the warehouse item is separate', 'If a problem is visible in inspection photos, raise it before adding that item to an international parcel. Check the applicable cancellation or after-sales terms in the Help Center. The available options depend on the order and its stage.'],
    ['Write a specific request', 'Include the order reference, the option purchased, the issue and the remedy you are asking about. Point to the relevant inspection photo or seller listing detail. Ask support to confirm any fees and steps before you proceed.'],
    ['Follow the recorded outcome', 'Keep the support response and check the order activity for progress. For a refund, follow the destination and status shown in your account so you can reconcile it with your payment records.'],
  ]],
].map(([slug, title, description, source, sections]) => ({ slug, title, description, source, sections }));

export const faq = [
  ['Buying & links', [
    ['What is the LitBuy spreadsheet?', 'It is a browsable catalog preview. The product records and photos come from CNFansSP.'],
    ['Where do search results open?', 'The search box sends your keywords to the CNFansSP search results page.'],
    ['Where do category and product links go?', 'Category links and product cards open the corresponding page on CNFansSP.'],
    ['Where do I register?', 'Use the registration button to open the official LitBuy registration page.'],
    ['Which platform is item 7632511460 from?', 'CNFansSP identifies the Jersey-60 marketplace listing as Weidian item 7632511460.'],
    ['Can I order with a marketplace link?', 'Paste the original marketplace URL into LitBuy search and check the seller and chosen option before ordering.'],
    ['What if a seller link fails?', 'Check the original marketplace page first. If the listing is gone, find another listing. If only the agent page fails, send LitBuy support the source link.'],
    ['How do I choose a size?', 'Compare the seller’s measurements to a similar garment you own, using the same units and measuring points.'],
  ]],
  ['Quality checks & warehouse', [
    ['What are LitBuy QC photos?', 'They are inspection photos of the item received at the warehouse.'],
    ['What should I check in QC photos?', 'Compare the ordered variant, visible condition and included pieces with the product order.'],
    ['What if I need a clearer QC view?', 'Ask LitBuy support whether an additional view is available and specify the angle or detail you need.'],
    ['Why is my item missing from the warehouse?', 'Check the product order status for seller delivery and warehouse processing before expecting it to be available for shipment.'],
    ['How long is free storage?', 'The Help Center lists 90 days of free storage. Check the deadline shown for your item.'],
    ['Can several orders be sent together?', 'LitBuy supports combining stored items into a parcel. Check the available routes for the resulting parcel.'],
    ['Can I ask for packing or reinforcement?', 'Review the packing options available when you prepare the parcel in your account.'],
    ['What if the warehouse item is the wrong option?', 'Gather the order reference and inspection photos, then ask support to review before submitting the item for shipping.'],
  ]],
  ['Shipping & after-sales', [
    ['Where can I estimate shipping?', 'Use LitBuy’s freight estimator with the destination and estimated packed weight and dimensions.'],
    ['Why can the final shipping charge change?', 'The estimated inputs can differ from the parcel’s final measured weight or dimensions. Check the price on the parcel record.'],
    ['How should I compare shipping lines?', 'Use the same destination and parcel details. Compare the price, route limits and delivery estimate shown.'],
    ['Where do I track an international parcel?', 'Open the parcel record or use the tracking entry in the LitBuy Help Center.'],
    ['What if a parcel shows delivered but is missing?', 'Save the tracking update and contact support with the parcel reference, carrier and latest delivery scan.'],
    ['What if an item or parcel arrives damaged?', 'Keep the label and packaging, photograph the damage and follow the LitBuy after-sales process.'],
    ['Can I cancel, return or exchange an item?', 'Review the applicable LitBuy rules for the order and its current stage, then request help through the account record.'],
    ['Where are prohibited items listed?', 'Open the prohibited-items guidance in the LitBuy Help Center and check the rules for the route you intend to use.'],
  ]],
];

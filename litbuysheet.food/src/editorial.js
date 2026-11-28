const official = 'https://litbuy.com';
const help = [official + '/help', 'Litbuy Help Center'];
const freight = [official + '/shipping-estimate', 'Litbuy freight estimator'];
const manual = [official + '/diy-order', 'Litbuy Fill & Buy'];
const tracking = [official + '/third-order-query', 'Litbuy tracking'];
const catalog = ['https://www.cnfanssp.com/AllProducts/', 'CNFansSP catalog'];
const example = ['https://www.cnfanssp.com/AllProducts/6667.html', 'CNFansSP Jersey-60 listing'];
const links = ['https://litbuydeals.com/tools/link-converter/', 'Marketplace link format reference'];

export const guides = [
  ['litbuy-spreadsheet', 'How to use a Litbuy spreadsheet', 'Turn a catalog result into a verified seller link and a useful shortlist.', [
    ['Start with an item, size or category', 'Search from the homepage to see matching CNFansSP results. If a broad search mixes unrelated items, start with a category and use the product title or seller attributes to narrow down. Open the detail page to get the listing link and compare item-specific photos.'],
    ['Keep one record per seller and option', 'Save the seller URL, platform, item ID, option label and the price you saw. Two rows with the same product title may be different listings, or the same seller may use one listing for many options. Keep the exact size and color with the link.'],
    ['Check the listing before paying', 'In the example Jersey-60 record, CNFansSP’s page number is 6667 and its Weidian item ID is 7632511460. Use the latter with the Weidian source when opening it in Litbuy. Review available options and the amount Litbuy shows at checkout.'],
  ], [catalog, example, help]],
  ['litbuy-link-converter', 'Litbuy link converter guide for Weidian, Taobao and 1688', 'Identify the source, extract the seller item ID and open the correct listing.', [
    ['Start with the seller URL', 'Weidian commonly places the numeric ID in itemID, Taobao in id, and 1688 in the offer path before .html. If you have a share or short link, open it and check its final destination first. Extra tracking parameters are separate from the item identifier.'],
    ['Let Litbuy resolve the URL', 'Paste the full seller URL into Litbuy’s search. Compare the returned listing with your original source before selecting a variant. A number alone does not specify the marketplace, and using it in the wrong route can return an unrelated item or an error.'],
    ['Diagnose a blank or expired result', 'Check whether the original seller page is still available and whether its variants display. If the seller page is open but Litbuy cannot import it, consult the manual-order guide or support. Save the seller URL alongside any generated agent link so you can repeat the check later.'],
  ], [links, example, help]],
  ['litbuy-registration', 'How to sign up for Litbuy and prepare your first order', 'Set up the account and collect the information you will need at checkout.', [
    ['Open the official registration page', 'Use the registration link on litbuy.com and follow the sign-up form. If you choose a separate sign-in provider, remember which method you used so you can return to the same account.'],
    ['Prepare the order before paying', 'Save the seller URL and exact option label. For shoes or clothing, compare your measurements with the seller’s own size chart and check which unit the table uses. Add a specific remark if the listing labels are ambiguous.'],
    ['Check order history after submission', 'Confirm that the new order lists the correct product and options. Keep the order number. Review any messages in the account before making a second payment or starting a duplicate order.'],
  ], [[official + '/register', 'Official Litbuy registration'], help]],
  ['litbuy-fill-and-buy', 'How to use Litbuy Fill & Buy for a manual order', 'Prepare seller, price and variant information for a link that will not import.', [
    ['Rule out basic URL problems', 'Check the original seller page and verify that the item can be chosen. If you pasted a search-result page or short link, reopen the full product URL and try Litbuy search again.'],
    ['Describe one option per order line', 'In Fill & Buy, supply the original link, the product name, the listed price, the quantity and the exact variant. Where two options have different prices, record each separately. A screenshot of the option selector can clarify labels that are similar.'],
    ['Check the terms before submitting', 'Review the manual-order terms in the form, including how they treat returns and incomplete seller information. If price or availability is unclear, verify it with support before relying on the estimate.'],
  ], [manual, help]],
  ['litbuy-qc-photos', 'How to check Litbuy QC photos before shipping', 'Review warehouse photos against the order and ask for the missing evidence.', [
    ['Match the photos to the right order', 'Use the warehouse record to confirm item identity and option. Seller photos show the listing. Warehouse photos show what arrived. Compare color, quantity, visible size markings and the included parts.'],
    ['Check the areas that affect your decision', 'For a jacket, look for closure, seams and label. For shoes, request a clear size label or an insole measurement if that decides fit. For an accessory, check hardware, dimensions and included attachments. Provide specific angles if you need more photos.'],
    ['Raise issues before consolidating', 'If photos show a mismatch, save the order number and mark the relevant photo. Contact support through the account while the item is still at the warehouse and review the seller’s exchange terms before submitting a parcel.'],
  ], [help]],
  ['litbuy-warehouse-storage', 'Litbuy warehouse storage and parcel consolidation', 'Keep track of arrivals, storage dates and which items should ship together.', [
    ['Track the arrival date for each item', 'The Help Center advertises 90 days of free storage. Check the warehouse record for the actual date and terms that apply to each item. When several orders arrive on different days, the earliest item can reach its deadline while you are waiting for others.'],
    ['Decide what belongs in the same parcel', 'Set aside items with open QC issues. Group only items that can travel together on the chosen route. Bulky and restricted items may affect eligibility, dimensions and total cost, so compare separate and consolidated estimates.'],
    ['Verify the parcel contents', 'Before paying for shipment, check the item count, packaging selections and recipient details. Keep the warehouse order IDs and the later parcel number together for tracking or support.'],
  ], [help, freight]],
  ['litbuy-shipping-calculator', 'How to use the Litbuy shipping calculator', 'Compare route estimates using consistent weight and dimensions.', [
    ['Collect the right inputs', 'Start with the destination and the expected packed dimensions and weight. Use the warehouse’s packed values when available. A bulky light item can cost more than its scale weight suggests on a route that prices by size.'],
    ['Compare routes on the same parcel', 'Keep destination, weight and dimensions fixed when comparing. Check the route’s eligibility, billing method, coverage and visible restrictions. If one option disappears after packing, check whether the packed measurements crossed a line limit.'],
    ['Compare against your complete order cost', 'Keep the seller price, domestic shipping and international shipping in separate lines. Check any selected packing, insurance or other charges at checkout. Compare the final parcel total before confirming the shipment.'],
  ], [freight, help]],
  ['litbuy-order-tracking', 'How to track a Litbuy order and international parcel', 'Find the right reference for domestic delivery, warehouse handling and international shipping.', [
    ['Identify the current leg', 'The order record is where to check progress from purchase to the Litbuy warehouse. Once an international parcel is submitted, use the parcel record for the international shipment. A domestic tracking number generally refers to the first leg.'],
    ['Follow the carrier updates', 'Copy the international tracking number from the parcel record and check Litbuy’s tracking page or the listed carrier. Note the last meaningful scan and the reported location. Some carrier handoffs can show up in separate tracking systems.'],
    ['Send a useful support request', 'Include the parcel number, tracking number, last scan date and what you want checked. If the carrier shows delivery but you cannot locate the parcel, preserve the delivery scan and report the discrepancy through your account.'],
  ], [tracking, help]],
  ['litbuy-returns-exchanges', 'Litbuy returns, exchanges and warehouse issues', 'Decide what to document and where to ask for a resolution.', [
    ['Record the problem as soon as you see it', 'Save the order number, selected option, seller listing and warehouse photos. For the wrong item or visible damage, identify which part differs and what resolution you prefer. Keep the item out of the parcel until you receive instructions.'],
    ['Check eligibility and timing', 'Use the Help Center and the order record to check cancellation, return and exchange options. Seller acceptance, order stage and return shipping can affect the available resolution. Ask support to confirm costs and deadlines for the specific order.'],
    ['Use the parcel record for delivery problems', 'For a missing or damaged international delivery, collect carrier scans and photos of the box, label and contents. Contact support with the parcel number and preserve the packing materials while the case is being reviewed.'],
  ], [help]],
  ['litbuy-shipping-restrictions', 'Litbuy shipping restrictions and route eligibility', 'Check whether a product can be purchased and whether the intended route accepts it.', [
    ['Identify the product attributes', 'Write down any features that can affect shipping, such as a battery, liquid, aerosol or unusually large packaging. Check the product details and the Litbuy Help Center before ordering an item that may need special handling.'],
    ['Review the destination and shipping line', 'Check the destination and the line’s eligibility for the actual parcel contents. Route restrictions and product purchasing restrictions are separate checks. If a route does not list the product as eligible, ask Litbuy support before submitting the parcel.'],
    ['Review packaging and documentation', 'Use accurate item descriptions and follow the route’s instructions. For mixed shipments, confirm whether one item affects eligibility for the whole parcel and ask support which route or parcel arrangement is appropriate.'],
  ], [help, freight]],
];

export const faqs = [
  ['spreadsheet', 'What is the Litbuy spreadsheet?', 'It is a catalog for browsing CNFansSP seller listings before opening purchase options in Litbuy.', 0],
  ['search', 'Where does the homepage search go?', 'Search opens the matching CNFansSP results page using the words you submit.', 0],
  ['categories', 'Where do category and product links open?', 'Both open the matching category or detail page on CNFansSP.', 0],
  ['source', 'How can I find the original seller?', 'Open the CNFansSP product detail and look for the source marketplace link.', 0],
  ['currency', 'Is a catalog price the final order cost?', 'Check the selected seller option and current quote in Litbuy. Domestic and international delivery may be charged separately.', 6],
  ['example-id', 'What is the ID for Jersey-60?', 'The CNFansSP detail page is 6667.html. Its seller link is a Weidian listing whose item ID is 7632511460.', 1],
  ['supported-links', 'What seller links can I try in Litbuy search?', 'Try a full Taobao, Weidian or 1688 product URL and verify the returned listing.', 1],
  ['expired-link', 'What if an old listing returns a blank page?', 'Check the seller URL and option availability first. Try the full link again or ask Litbuy support about the listing.', 1],
  ['register', 'Where do I register?', 'Open Litbuy’s registration page from the header and follow the sign-up form.', 2],
  ['invite', 'Is the registration link tied to an invitation code?', 'The link in this preview opens the official registration entry without an invitation parameter.', 2],
  ['manual-order', 'What does Fill & Buy do?', 'It is Litbuy’s manual ordering form for links that need product detail, price and quantity entered by hand.', 3],
  ['variant', 'What should I include in an order remark?', 'Include the exact seller option, size and color, with a clear instruction if the seller’s label is ambiguous.', 3],
  ['qc', 'When do QC photos become relevant?', 'Review warehouse photos after arrival and before submitting the international parcel.', 4],
  ['extra-photos', 'What if the QC photos miss an important angle?', 'Specify the measurement, label or angle you need when you ask Litbuy for additional photos or support.', 4],
  ['storage', 'How long is free warehouse storage?', 'Litbuy’s Help Center advertises 90 days. Check your item’s storage date and terms in the warehouse record.', 5],
  ['consolidation', 'Can I combine items in one parcel?', 'Review which items have arrived and whether the selected route accepts the combined parcel.', 5],
  ['shipping-estimate', 'What information helps estimate shipping?', 'Use the destination and packed weight and dimensions. Compare routes with the same parcel inputs.', 6],
  ['tracking', 'Which tracking number should I use?', 'Use the international tracking number from the parcel record after international shipment starts.', 7],
  ['carrier-scan', 'What should I do if tracking stops updating?', 'Check the carrier’s last scan. If you contact support, include the parcel number, carrier and last scan date.', 7],
  ['return', 'What should I do if the wrong variant arrives?', 'Preserve the order details and QC photos, then ask support about eligibility before shipping the item.', 8],
  ['delivery-issue', 'How do I report a damaged parcel?', 'Keep photos of the label, packaging and damage, and report it with the parcel and tracking numbers.', 8],
  ['restricted-items', 'How can I check shipping restrictions?', 'Review Litbuy’s prohibited items guidance and destination-specific route eligibility before paying.', 9],
];

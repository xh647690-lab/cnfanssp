export const sources = {
  official: ['HipoBuy official website', 'https://hipobuy.com/'],
  guide: ['Hipobuy Spreadsheet Beginner Guide', 'https://hipobuy-spreadsheet.com/guides'],
  links: ['Hipobuy order options and guides', 'https://hiipobuy.com/'],
  shortlist: ['How to use a HipoBuy spreadsheet', 'https://hipo-buy.com/how-to-use-hipobuy-spreadsheet/'],
  qc: ['HipoBuy warehouse and help glossary', 'https://hippoobuy.net/help/'],
  estimate: ['HipoBuy shipping estimate', 'https://hipobuy.com/estimation'],
  freight: ['HipoBuy buying and shipping walkthrough', 'https://hipobuyspreadsheet.us/hipobuy-guide/'],
  walkthrough: ['HipoBuy first-order walkthrough', 'https://hipofinds.com/guide/']
};

// Newest entries first. Competitor pages establish topic demand and vocabulary,
// while live terms and account-specific decisions belong to HipoBuy.
export const guides = [
  ['tracking', 'How to Track a HipoBuy Order and Parcel', 'Which tracking number to use and when to ask for help.',
    [
      ['Identify what you are tracking', 'A purchase can move from the seller to the warehouse and later from the warehouse to your address. Open the original order if the item has yet to arrive in storage. After you submit an international shipment, open the parcel record and use the tracking details attached there. Keep the order number and parcel number separately when one parcel contains multiple purchases.'],
      ['Read the latest scan in context', 'Record the latest scan and its timestamp, then check how the selected route describes delivery and tracking. An initial label or booking entry may appear before the carrier publishes a movement scan. If a second carrier handles the local delivery, use its number only once the parcel record or the carrier provides it.'],
      ['Give support a specific question', 'If the tracking remains unchanged beyond the route guidance, send HipoBuy the parcel number, date submitted and last visible scan. If tracking says delivered but the shipment is missing, check the proof of delivery or local carrier record and share the evidence with support. Keep your full address and tracking information out of public posts.']
    ], ['official','links','freight']],
  ['returns', 'HipoBuy Returns After QC: What to Check First', 'Collect evidence and review the item’s current return terms.',
    [
      ['Open the stored item', 'When the warehouse photos show a problem, open that item in your account and check the available after-sales actions. Keep the item out of a submitted international parcel while the request is pending. Confirm the applicable request window and seller conditions in the order, since a third-party walkthrough may describe terms from another date.'],
      ['Describe the difference clearly', 'State the option you selected and the difference visible in the warehouse photo. Include the order number and the image that shows the issue. For a size dispute, identify the exact measurement and how the seller’s chart measures it. A photo with a ruler is easier to evaluate when the start and end points are both visible.'],
      ['Check fees and monitor the outcome', 'Ask whether an exchange or a return is available and what deductions may apply. If a replacement is possible, confirm the required option and wait for its warehouse photos before adding it to a parcel. Keep the request open until the order history shows a resolution or support explains the available next step.']
    ], ['official','qc','walkthrough']],
  ['coupons', 'HipoBuy Coupons: Where to Check Eligibility', 'Compare the payable amount with and without a coupon.',
    [
      ['Find the coupon in your account', 'Open the account area and inspect the coupon’s current terms. Record the expiration date, minimum spend and the charge it applies to. A registration link can open a normal sign-up flow, while any actual welcome offer depends on what HipoBuy shows in your account.'],
      ['Apply it at the correct step', 'Product checkout and international parcel submission are separate stages. At either stage, select a coupon only when the checkout presents it as eligible and then check that the discount appears in the total. If it does not appear, compare the eligible subtotal, expiration date and route restrictions with the order you are trying to submit.'],
      ['Compare final totals', 'When looking at two shipping lines or packing choices, write down both payable totals with the same delivery address. A larger discount can still leave a higher total when the underlying fare is higher. Leave the order unchanged while you compare and verify the final summary before paying.']
    ], ['official','guide','walkthrough']],
  ['shipping-estimate', 'HipoBuy Shipping Calculator: How to Read an Estimate', 'Compare routes using the same destination, weight and dimensions.',
    [
      ['Use realistic parcel inputs', 'Open HipoBuy’s shipping estimator and use the actual destination, including a postal code when requested. If the outer parcel is not yet packed, enter the best available weight and dimensions and run a second estimate with a slightly larger carton. Keeping the destination fixed makes the result easier to compare.'],
      ['Check the route’s billing rules', 'Some lines use the space a parcel occupies as part of the weight calculation. For a bulky order, compare the route’s treatment of actual and volumetric weight and read its rounding instructions. Keep packaging and product restrictions in view before deciding based on price.'],
      ['Review the parcel quote again before payment', 'Return to the parcel once the actual measurements are available. Compare the payable amount against your earlier estimate and check which optional services are included. For example, if two lines swap price order after packing, compare the live totals and service details using the final box dimensions.']
    ], ['estimate','freight','qc']],
  ['warehouse', 'HipoBuy Warehouse and Parcel Consolidation Guide', 'Decide which stored items can travel together.',
    [
      ['List the items that are ready', 'In the warehouse view, identify each item whose photos and selected options you have reviewed. Note the storage deadline shown in your account, especially when you are waiting for a last item from a different seller. Resolve any open after-sales request before selecting an item for packing.'],
      ['Compare one parcel with two', 'Start with the destination and the types of items you plan to combine. Compare the available routes and their limits. Putting items in one box can spread some charges across the order, but it may also increase the billable dimensions or reduce the number of eligible routes. Estimate both arrangements if the difference matters to your budget.'],
      ['Choose the packaging intentionally', 'Decide whether original packaging is important for protection or a future return. Check whether a packing option changes the outside dimensions, then re-check the route and address at submission. Save the final list of included items so you know what to expect in each parcel.']
    ], ['official','guide','links']],
  ['qc-photos', 'HipoBuy QC Photos: What to Inspect Before Shipping', 'Read warehouse photos against the specific option you purchased.',
    [
      ['Start with the order details', 'Open the exact stored item and compare the photos with the seller option you selected. For a garment, check the label, color, seams and relevant measurements. For a pair of shoes, use views that include both shoes, the size marking and the outsole. Keep the seller gallery and the warehouse photos separate when comparing them.'],
      ['Ask for a photo that answers a question', 'If a concern is hidden or ambiguous, describe the angle or measurement you need. For a jacket, ask for a clear view of the zipper and a ruler laid along the area identified in the seller’s size chart. Check whether a requested photo has a charge before confirming.'],
      ['Decide while the item is still stored', 'A photo can show a loose seam or a visible measurement, while comfort, long-term durability and authenticity usually need other evidence. If you see a mismatch, keep the item out of the international parcel, attach the evidence to a support request and check the order’s after-sales options.']
    ], ['official','qc','guide']],
  ['order-cost', 'HipoBuy Fees: Item Checkout and Parcel Checkout', 'Build a budget from both checkout stages.',
    [
      ['Start with the selected item', 'Record the variant price, quantity and any seller-to-warehouse delivery charge shown at item checkout. If your payment provider displays a conversion or fee, use the payable amount it quotes. Compare two options using the same quantity and currency so the price difference is meaningful.'],
      ['Estimate the international leg separately', 'Use the destination and an estimate of the packed dimensions for a preliminary quote. Add only the optional packing services you intend to select. Check the shipping route’s description for any destination-specific charges and review the actual parcel total when measurements are available.'],
      ['Keep a simple record', 'Write down the product payment, any later adjustments and the final parcel payment under separate headings. For several products sent together, compare the parcel as a whole before deciding how to share its cost among items. Treat live checkout amounts as the figures to verify before each payment.']
    ], ['official','guide','freight']],
  ['product-links', 'How to Open Weidian, Taobao or 1688 Links in HipoBuy', 'Find the original seller URL and verify the match.',
    [
      ['Copy the seller link from the catalog', 'Open a CNFansSP product detail page and look for the original marketplace link. Copy the complete URL so the marketplace and product identifier travel together. A product number copied on its own may be ambiguous if the source marketplace is missing.'],
      ['Compare the product after pasting', 'Paste the seller URL in the HipoBuy search field. Check the loaded title, gallery and the option you want. A seller can change images or available sizes after an entry is added to a catalog, so use the loaded listing and your current order screen when you make a decision.'],
      ['Troubleshoot the source before switching paths', 'If the listing fails to load, confirm that the original marketplace page still opens. If the original is readable and the standard import fails, review HipoBuy’s Custom Order option and enter the item details only when you can identify the seller and variant. Use Forwarding Order for an item you already bought and are arranging to send to the warehouse.']
    ], ['official','links','shortlist']],
  ['first-order', 'How to Buy on HipoBuy: First Order Walkthrough', 'Follow one product from seller link to international parcel.',
    [
      ['Create the account and select the item', 'Open HipoBuy’s official registration page. Once you can access your account, paste the original marketplace link. Select the exact color, size and quantity and check the payable order summary. Save a screenshot of the seller’s size chart if the sizing will matter during warehouse review.'],
      ['Wait for the seller-to-warehouse leg', 'Follow the item in your order list as HipoBuy handles buying and warehouse intake. Open the stored item when its inspection details become available. Compare the label, selected options and any visible issue, then check the available support options if the photos raise a concern.'],
      ['Submit the parcel and keep its tracking details', 'Select reviewed items, confirm the delivery address and compare the available lines with the packing choices you want. Review the new shipping total before submitting. Save the international parcel reference separately from the product order number so you can find the right record later.']
    ], ['official','walkthrough','guide']],
  ['spreadsheet', 'HipoBuy Spreadsheet Guide: Find and Verify Listings', 'Search the directory and build a shortlist from live listings.',
    [
      ['Search using product attributes', 'Start with a category and a useful property such as material, color or garment type. In this preview, the search form sends your keywords to the CNFansSP results page. A category link opens the matching CNFansSP category. Save a few candidates instead of relying on the first catalog title.'],
      ['Verify at the seller page', 'Open a product’s CNFansSP detail and follow its marketplace link when available. Record the option, seller price and measurement that matter to you. For example, compare the same chest-width measurement across two jacket charts and note whether the measurement is taken flat.'],
      ['Move your shortlist into the order decision', 'Paste the chosen marketplace link into HipoBuy, recheck the available options and review the current checkout. Keep the seller link and selected option with your order notes. They give you a reference when warehouse photos appear or when you need to ask a specific question about the item.']
    ], ['shortlist','guide','official']]
];

export const faq = [
 ['Which tracking number should I check?', 'Use the order for the seller-to-warehouse leg and the parcel record for the international leg.', 'tracking'],
 ['What should I do if QC shows the wrong item?', 'Keep it out of the parcel, photograph or save the evidence available in the order, and review the after-sales options while it is stored.', 'returns'],
 ['Where can I confirm whether a coupon works?', 'Check the coupon conditions in your account and confirm the discount appears in the applicable checkout total.', 'coupons'],
 ['What is a HipoBuy spreadsheet?', 'It is a directory of product leads. Use it to find an item and follow its seller link to verify the current listing.', 'spreadsheet'],
 ['Where do the photos and categories on this preview come from?', 'The catalog uses the live CNFansSP homepage. Cards and categories open their corresponding pages on CNFansSP.', 'spreadsheet'],
 ['How do I use the search box?', 'Enter a product keyword and submit. Your browser opens the CNFansSP results page.', 'spreadsheet'],
 ['Where do I register for HipoBuy?', 'Use the sign-up page on hipobuy.com. Account setup and payment are handled by HipoBuy.', 'first-order'],
 ['Can I paste a Taobao or 1688 link?', 'HipoBuy’s product-link workflow can be used with supported seller URLs such as Weidian, Taobao and 1688. Verify the variant after import.', 'product-links'],
 ['What if I only have a product number?', 'Identify the source marketplace and obtain its full product URL before relying on the match.', 'product-links'],
 ['How do I check a broken seller link?', 'Try opening the original listing and verify that it still shows the item. The seller may have moved or removed it.', 'product-links'],
 ['When should I use Custom Order?', 'Check that option when the seller listing is readable but the standard product import does not load it.', 'product-links'],
 ['What is a Forwarding Order?', 'It handles an inbound shipment for an item you purchased yourself. Follow the warehouse instructions shown by HipoBuy.', 'product-links'],
 ['How do I check which size I ordered?', 'Compare the selected order option with the seller chart and use a warehouse measurement where the fit depends on it.', 'first-order'],
 ['What are warehouse QC photos?', 'They show the item that arrived at the warehouse and let you review visible details such as options, labels and condition.', 'qc-photos'],
 ['Can QC photos verify authenticity?', 'Use the photos to check visible details. Authentication requires evidence beyond ordinary warehouse images.', 'qc-photos'],
 ['Can I request another photo?', 'Review the photo services attached to the stored item and check the displayed charge before requesting an extra angle.', 'qc-photos'],
 ['How do I check the return deadline?', 'Look at the order’s after-sales details and seller conditions as soon as you spot a problem.', 'returns'],
 ['What does warehouse storage mean?', 'It is the period when a received item stays in the warehouse so you can review it and choose a parcel. Check the deadline in your account.', 'warehouse'],
 ['Can I combine purchases from different sellers?', 'Review the eligible stored items and route restrictions before selecting them together for parcel submission.', 'warehouse'],
 ['Why does a large box increase the shipping estimate?', 'Some lines use volume in their billable weight calculation. Check the line’s formula and the packed dimensions.', 'shipping-estimate'],
 ['Does the item price cover international shipping?', 'Review product checkout and the international parcel quote as separate charges.', 'order-cost'],
 ['Why does the final parcel total differ from the estimate?', 'Packed size, actual weight, route and selected services may differ from the inputs used for the first estimate.', 'shipping-estimate'],
 ['What should I send support if tracking stalls?', 'Send the parcel reference, submission date and last available tracking scan through HipoBuy support.', 'tracking'],
 ['Where can I see payment options?', 'Open the applicable HipoBuy checkout to see the methods and totals available to your account.', 'order-cost']
];

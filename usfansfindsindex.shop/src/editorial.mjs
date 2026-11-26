const official = 'https://www.usfans.com';
export const sources = {
  catalog: ['CNFansSP catalog', 'https://www.cnfanssp.com/AllProducts/'],
  order: ['USFans beginner’s guide', official + '/beginner-guide'],
  terms: ['USFans service agreement', official + '/page/serviceAgreement'],
  returns: ['USFans return and exchange policy', official + '/help/HCON_STATIC_006'],
  account: ['USFans registration', official + '/register'],
  product: ['USFans example product listing', official + '/product/3/7683977315'],
};

export const articles = [
  ['spreadsheet', 'How to use the USFans Spreadsheet', 'Find a listing on CNFansSP and match it to the live seller offer before ordering.', 'catalog', [
    ['Start with a useful search', 'Search for an item type plus a distinguishing detail, such as “zip hoodie” or a model name. A category is useful when comparing several items with the same purpose. Keep the source product page open while comparing options so you can return to the exact listing.'],
    ['Record the listing and variant', 'Save the original seller URL, the marketplace, and the exact color and size. An ID alone may leave the source marketplace ambiguous. If a listing offers several variants, confirm that the photo you liked corresponds to the option you intend to select.'],
    ['Check the live offer', 'Open the seller link through USFans and verify the seller, variant, stock and current price there. If an old listing no longer loads, return to the search results and compare a new candidate using its own seller link and size chart.'],
  ]],
  ['how-to-order', 'How to order on USFans for the first time', 'Follow an item from seller link to warehouse review and parcel submission.', 'order', [
    ['Open the correct product', 'Paste the complete seller URL into USFans. Compare the item title, seller, photos and selected variant with your original listing before adding it to the cart. Include any measurement or packaging request in the relevant order field when available.'],
    ['Review the item order', 'Before payment, check quantity, domestic delivery charges and the final amount shown. After ordering, monitor the order for agent messages. Use Order Enquiry if the seller requests a substitution or the product information needs clarification.'],
    ['Review the warehouse item', 'When the item enters Warehouse, compare its inspection pictures with the ordered option. Once you have resolved any issue, select the items you want to ship, enter the destination, review the available routes and submit the parcel.'],
  ]],
  ['product-links', 'USFans product links for Weidian, Taobao and 1688', 'Identify the marketplace and recover links that open the wrong product.', 'product', [
    ['Keep the original URL', 'A usable listing includes its marketplace and product identifier. For example, the USFans product page cited below identifies Weidian as its source. Save the seller link with the item ID in your notes, especially when searching across different marketplaces.'],
    ['Verify the imported result', 'Compare the seller name, gallery and option labels after pasting the link. If a link opens a mobile share page or loses the product identifier, reopen it at the marketplace and copy the full listing address again.'],
    ['Resolve missing details', 'If USFans shows incomplete options, cross-check the original gallery and seller description. Ask the agent about ambiguous details before paying. For an unavailable listing, search for a fresh link and verify the new seller’s measurements and variants separately.'],
  ]],
  ['registration', 'USFans registration and account setup', 'Create your USFans account and find the controls you will use after placing an order.', 'account', [
    ['Start on the official domain', 'Use the registration page on www.usfans.com and follow the verification prompts shown there. Bookmark the official site so you can return to your order records directly. Use an inbox you can access for account and order messages.'],
    ['Locate your order records', 'After signing in, look for Orders, Warehouse and Parcels in the user area. Keep your order number with your seller link when comparing several similar items. It gives support a specific order to review if an option or seller message needs attention.'],
    ['Check promotions in your account', 'If you used an invitation or promotion, read its eligibility and expiry in the account before budgeting. Review the actual checkout total and distinguish any item discount from an international shipping discount.'],
  ]],
  ['qc-photos', 'USFans QC photos: what to check before shipping', 'Compare warehouse evidence with the variant you actually ordered.', 'order', [
    ['Compare the visible details', 'Open the warehouse photos alongside the original listing and the selected option. Check the label, color, number of pieces and obvious marks. For shoes, compare both sides when available. For clothing, check the size tag and the measurement points that matter to fit.'],
    ['Request a precise view', 'If the photos leave uncertainty, identify the exact view you need, such as a ruler across the chest or a close-up of a marked seam. Include the order number and the reason for the request so support can identify the item and inspect the right spot.'],
    ['Decide while the item is in storage', 'Keep the item in your warehouse while a mismatch is being reviewed. If seeking an exchange or return, check the deadline and submit through the relevant order. A past buyer’s QC gallery can help you shortlist a listing, while your own photos are the basis for your parcel decision.'],
  ]],
  ['shipping-estimate', 'USFans shipping estimate and parcel cost', 'Use destination, dimensions and route details to compare shipping quotes.', 'order', [
    ['Gather comparable inputs', 'Use the actual destination and include the expected packaged dimensions and weight. Compare routes with the same inputs. A large box can affect a quote even when the contents are light, so revisit the estimate after deciding what original packaging to keep.'],
    ['Distinguish deposit and final charge', 'The USFans beginner guide describes international postage as an initial deposit based on estimated weight, method and destination. The final amount depends on verified packed measurements. Compare the parcel record with your estimate once packing is complete.'],
    ['Budget the complete order', 'Record the item charge, any domestic shipping and the international quote separately. Check route-specific eligibility and any applicable charges before submission. A product price shown in the spreadsheet is only one part of the amount you may pay.'],
  ]],
  ['warehouse-storage', 'USFans warehouse storage and parcel consolidation', 'Plan storage deadlines and group only the items ready to ship.', 'order', [
    ['Review items individually', 'When items arrive, open Warehouse and check the pictures and status of each purchase. Note any deadline displayed in your account. If orders arrived on different days, review each record separately before deciding to wait for another seller.'],
    ['Choose what to group', 'Consolidation lets you select multiple stored items for one parcel. Group items that are ready and eligible for your preferred route. Consider whether keeping retail boxes or using protective packaging changes the dimensions enough to affect the shipping quote.'],
    ['Review the parcel before submitting', 'Confirm each item and quantity in the parcel, recheck the destination address and review the selected route. Keep unresolved items out of the submission. After dispatch, record the parcel number in the account for tracking or after-sales enquiries.'],
  ]],
  ['order-status', 'USFans order and parcel status: what to do next', 'Find the right account section and give support the details needed to help.', 'order', [
    ['During seller purchase', 'Open Orders and read the most recent message. If an option is unavailable, identify the listing and exact variant before replying to an agent. Confirm whether you authorize any replacement, especially when the color or measurement differs.'],
    ['After warehouse arrival', 'Use Warehouse to review inspection photos and select items for dispatch. Keep the item order number and parcel number separate. The first identifies the seller purchase and the second identifies the shipment you build from stored items.'],
    ['After dispatch', 'Open Parcels for tracking updates. If a delivery scan conflicts with what you received, save the tracking event and contact support through that parcel record. Include the date and a concise description so the team can distinguish a tracking question from a missing item.'],
  ]],
  ['returns', 'USFans returns and exchanges: warehouse checklist', 'Check seller eligibility, evidence and any shipping cost before submitting an after-sales request.', 'returns', [
    ['Look up the specific order', 'Open the affected order and check After-sales as soon as you spot a problem. USFans describes a five-day guarantee for eligible seller listings. Check the deadline and rules for your item, especially when you are waiting for a better photo.'],
    ['Describe the discrepancy', 'State what you selected and what the inspection shows. Attach the order and inspection evidence when prompted. A concise description such as “ordered size M, package label shows L” gives the agent a concrete issue to verify with the seller.'],
    ['Confirm the proposed outcome', 'Review whether the seller accepts a return or exchange and who pays the relevant shipping costs. The official policy distinguishes quality issues from requests about otherwise eligible goods. Keep the affected item out of an outgoing parcel until the request is resolved.'],
  ]],
  ['size-guide', 'USFans size guide: compare actual garment measurements', 'Use a garment you own to check the seller chart before ordering.', 'product', [
    ['Measure a comparable garment', 'Lay a garment that fits flat on a table. For tops, compare shoulder width, chest width and length. For trousers, record waist width, rise and inseam. Each chart may use different measuring points, so look for the diagram before comparing numbers.'],
    ['Check how the chart reports width', 'Some charts show flat width and others show circumference. Compare like with like, and keep units consistent. Use your garment’s cut and fabric as context when choosing between sizes or comparing sellers.'],
    ['Verify the selected variant', 'Record the size and color as they appear in checkout. When the item reaches the warehouse, check its tag and request a measurement photo if fit depends on a specific dimension. Resolve discrepancies before including it in a parcel.'],
  ]],
];

export const faqs = [
  ['What is the USFans Spreadsheet?', 'It is an independent way to browse product listings from CNFansSP before opening a seller offer through USFans.', 'catalog'],
  ['Where do search results open?', 'The search form sends the terms to CNFansSP and opens its search results.', 'catalog'],
  ['Where do category links go?', 'They open the matching category on CNFansSP.', 'catalog'],
  ['Can I browse without registering?', 'The directory is publicly accessible. Register with USFans to manage purchases there.', 'account'],
  ['How do I search for a specific item?', 'Try its model name or a short product description. If you already have a seller URL, paste it into USFans.', 'order'],
  ['Is a product ID enough to build a USFans link?', 'Keep the source marketplace and the original listing URL with the ID so the correct listing can be identified.', 'product'],
  ['Where should I create a USFans account?', 'Open the official USFans registration page and follow the prompts there.', 'account'],
  ['How do I start an order?', 'Paste the seller link into USFans and check the variants and total before submitting the order.', 'order'],
  ['Where do I check the actual item price?', 'Use the current price for the selected option in USFans and review the checkout amount.', 'order'],
  ['What if a seller link stops working?', 'Reopen the original marketplace listing. If it is unavailable, verify any replacement listing independently.', 'order'],
  ['Where do I ask about an order?', 'Use Order Enquiry on the relevant purchase and provide the order number and the question you need answered.', 'order'],
  ['What are USFans QC photos?', 'They are pictures taken when a purchased item is inspected at the warehouse.', 'order'],
  ['Where do I see my inspection photos?', 'Open Warehouse in the user area and select the stored item.', 'order'],
  ['What should I look for in a QC photo?', 'Compare the tag, color, visible condition and variant with your order. Request a specific view if needed.', 'order'],
  ['Can I ship purchases from multiple sellers together?', 'Select the eligible stored items you want to consolidate in the warehouse parcel workflow.', 'order'],
  ['What should I check before leaving an item in storage?', 'Review its warehouse record and applicable storage deadline before waiting for another item.', 'terms'],
  ['Why can an international shipping estimate change?', 'Final charges can depend on the dimensions and weight verified after packing.', 'order'],
  ['Where do I track a dispatched parcel?', 'Use Parcels in the USFans user area and open the relevant tracking record.', 'order'],
  ['How do I choose a garment size?', 'Compare the seller chart with a similar garment you own and verify the units and measuring points.', 'product'],
  ['What if my warehouse item looks wrong?', 'Save the order and QC evidence, then contact after-sales before dispatch.', 'returns'],
  ['Does every listing qualify for a return?', 'Check the seller’s eligibility rules and the deadline displayed for that order.', 'returns'],
  ['Who pays return postage?', 'Confirm the charge in your case. The official return policy distinguishes quality issues from other eligible requests.', 'returns'],
  ['What should I check before submitting an international parcel?', 'Review the selected items, destination address, route eligibility and quote.', 'order'],
  ['Where can I check rules for a restricted item?', 'Read the purchasing notice and contact USFans if you need the item’s eligibility confirmed for your destination.', 'product'],
];

const help = ['LitBuy Help Center', 'https://litbuy.com/help'];
const catalog = ['CNFansSP product catalogue', 'https://www.cnfanssp.com/AllProducts/'];
const jersey = ['CNFansSP Jersey-60 listing', 'https://www.cnfanssp.com/AllProducts/6667.html'];
const goods = ['LitBuy product search', 'https://litbuy.com/goods'];
const direct = ['LitBuy Weidian product route example', 'https://litbuy.com/products/details?channel=WEIDIAN&id=7871127884'];
const converter = ['Marketplaces and link structure', 'https://litbuy.tools/en/link-converter/'];
const competitor = ['Comparison of buyer search topics', 'https://litbuy.ink/guides/'];
export const guides = [
  ['litbuy-spreadsheet', 'How to use a LitBuy spreadsheet', 'Search CNFansSP, verify the source listing and carry the right details into LitBuy.', [
    ['Start with a short search', 'Search by a product name or category such as jersey, hoodie or shoes. The search opens CNFansSP, where you can compare photos and recorded prices. Try a broader term when a long title returns few results, then narrow the selection using categories.'],
    ['Keep the marketplace and ID together', 'Open the CNFansSP detail page before ordering. For example, Jersey-60 is page 6667 in the catalogue and item 7632511460 on Weidian. Save the original seller link with the marketplace item ID so you can find the listing again even if a spreadsheet row moves.'],
    ['Verify the option in LitBuy', 'Paste the seller URL into LitBuy search. Compare the seller, photos, colour and size with your shortlist, then review the amount shown in LitBuy. If the listing returns no result, check the original seller page for changes before trying another listing.'],
  ], [catalog, jersey, goods]],
  ['litbuy-link-converter', 'LitBuy link converter guide for Weidian, Taobao and 1688', 'Identify the source marketplace and recover the original listing before opening it in LitBuy.', [
    ['Read the original address', 'A Weidian link usually has itemID in the query string. Taobao normally uses id, and a 1688 offer commonly carries its number in the page path. Keep the marketplace alongside that number because a bare ID does not identify where it belongs.'],
    ['Use the seller link as the input', 'Open LitBuy product search and paste the complete source URL. For Weidian, LitBuy also uses a details route with channel=WEIDIAN and an id value. Retain both parameters when sharing this type of link and verify the returned seller and product before choosing an option.'],
    ['Troubleshoot shortened or stale links', 'Open shortened links in your browser first and copy the resulting seller address. If the original sale page has changed or the seller took it down, search the catalogue for another listing and compare identifiers and photos before treating it as the same item.'],
  ], [goods, direct, converter]],
  ['litbuy-qc-photos', 'LitBuy QC photos and warehouse inspection checklist', 'Use inspection images to confirm your own order before submitting it for shipping.', [
    ['Identify which photos you are viewing', 'Catalogue photos describe the listing. In your LitBuy account, open the received order and review the inspection images associated with that order. Check the SKU or option against your order record before drawing conclusions from the photos.'],
    ['Compare details you can see', 'Start with quantity, colour, markings and visible damage. For shoes, compare both sides and the size labels if visible. For clothing, use any measurement photos to compare the garment against a piece you already own. Use the photos to check visible details and consult the seller’s sizing information for fit.'],
    ['Resolve a mismatch before dispatch', 'Record the order number, selected option and the relevant photo. Ask LitBuy support about the discrepancy through the order record. Keep that item out of a new parcel request while the return or exchange question is open.'],
  ], [help, direct, competitor]],
  ['litbuy-shipping-estimator', 'How to use the LitBuy shipping calculator', 'Compare estimates using the same destination, weight and parcel dimensions.', [
    ['Start from the destination', 'Open Freight Estimator from the LitBuy site and enter the delivery destination. Compare lines for the same destination and input values. Review the line conditions for size, weight and product restrictions before using the cheapest displayed estimate.'],
    ['Account for the outer box', 'Use estimated weight and external dimensions for an early comparison. Bulky, light parcels can be charged by volumetric weight depending on the line. Recheck the quote after packing using the warehouse measurements, especially if the box dimensions changed.'],
    ['Calculate the total separately', 'Record the item amount, any seller-to-warehouse delivery and your international quote as separate entries. Review optional services, exclusions and the total presented when submitting the parcel. Use the estimate as a budget figure until the actual parcel is measured.'],
  ], [help, direct, competitor]],
  ['how-to-order-on-litbuy', 'How to order on LitBuy from a seller link', 'A first-order walkthrough from the seller listing to warehouse review.', [
    ['Prepare the listing', 'Use a source listing that opens and shows the option you want. Copy its full URL into LitBuy product search. Verify the seller, colour, size and quantity. Save the seller’s option text when the translated choice is ambiguous.'],
    ['Follow the purchase in Orders', 'After you submit the item purchase, keep the order number and check the order screen for progress, warehouse arrival or an option that needs clarification. Contact support through the order if the seller cannot supply the selected option.'],
    ['Review before sending a parcel', 'When the item is stored, open its inspection record. Decide which stored items to include together and review the destination, shipping line and displayed parcel cost before submitting the international shipment.'],
  ], [help, goods, direct]],
  ['litbuy-warehouse-storage', 'LitBuy warehouse storage and parcel consolidation', 'Organize stored items around their arrival dates, inspection status and shipping restrictions.', [
    ['Read the deadline for each item', 'LitBuy’s Help Center describes a 90-day free storage period. Check the deadline and any extension options displayed in your account for the item you plan to keep in storage. If orders arrive on different days, note their deadlines separately.'],
    ['Group items by what can travel together', 'Consolidation lets you combine eligible stored items. Review each item’s restrictions and whether they leave you with a suitable shipping line. Compare one combined estimate with two smaller parcels if box size or line limits make the combined plan costly.'],
    ['Submit only approved items', 'Review QC first and keep disputed items out of the parcel. Check the packed weight and dimensions when available, and confirm packing choices and the shipping address before paying. Save both the item order numbers and parcel number.'],
  ], [help, direct]],
  ['litbuy-parcel-tracking', 'How to track a LitBuy order or parcel', 'Find the right reference for a seller order, warehouse item or international shipment.', [
    ['Identify the stage', 'For an item that has yet to reach the warehouse, look at the purchase order in LitBuy. Once you submit an international shipment, open its parcel record and copy the tracking number associated with that shipment. Keep both references to make support conversations easier.'],
    ['Read the last scan with its date', 'Use LitBuy’s Track Shipment entry and compare the newest event with the carrier history if the parcel record identifies a carrier. A label event can appear before the next carrier scan. Record the times and any requested action shown in the tracking record.'],
    ['Escalate with the parcel reference', 'If the line reports an exception or asks for additional information, use the parcel record to contact LitBuy. Provide the parcel number, tracking number, the last visible scan and a short description of the issue. Follow the shipping line’s instructions for delivery-related requests.'],
  ], [help, direct]],
  ['litbuy-returns-exchanges', 'LitBuy returns and exchanges after QC', 'What to gather before asking about a warehouse return, exchange or after-sales issue.', [
    ['Start from the order record', 'Open the order and record its status, seller, selected option and arrival date. Check the official Help Center’s Cancel Order and After-sales Request entries and the options displayed for your order. Eligibility may depend on the seller and stage.'],
    ['Send the specific discrepancy', 'Use the order number and the relevant inspection images. Describe the difference in concrete terms, such as a size-label mismatch or a quantity error. Specify whether you want to request an exchange or a return and ask what charges or timing apply.'],
    ['Keep the item available for resolution', 'If the item is still in storage, keep it out of an international shipment while the request is open. Save the support response and confirm any change in the order record before assuming a replacement or refund has been completed.'],
  ], [help]],
  ['litbuy-total-cost', 'What a LitBuy haul costs from item price to delivery', 'Build a line-by-line budget using the listing, the packed parcel and the chosen route.', [
    ['Write down the item subtotal', 'Use the amount shown for the selected variants in LitBuy and record any domestic delivery charge displayed for those items. Keep the currency visible in each line so a yuan listing price is never added directly to a different currency amount.'],
    ['Price the international parcel', 'Use Freight Estimator with a single destination and compare eligible lines under the same inputs. Note which fees or optional services are shown, and recheck at checkout once the packed parcel has a measured weight and dimensions.'],
    ['Compare totals under one set of assumptions', 'For two haul options, keep the destination, currency and timeframe consistent. Review the line’s terms for which destination charges it covers. Compare the complete amount payable before choosing between a cheaper item with bulkier packaging and another option.'],
  ], [help, direct, competitor]],
  ['litbuy-dead-links', 'How to fix a LitBuy product link that shows no result', 'Find out whether the problem comes from a broken URL, the seller page or the requested option.', [
    ['Check the full seller URL', 'Open the original link outside LitBuy. Confirm the marketplace and the item ID, including the relevant query parameter or offer path. Remove trailing chat punctuation from pasted links and resolve shortened URLs before copying the final seller address.'],
    ['Test the supported search entry', 'Paste the original URL into LitBuy product search. If the agent route still fails while the seller page opens, check whether the seller page requires sign-in, whether the item is unavailable or whether only some options remain. Save the exact error message when asking support.'],
    ['Find a replacement from the catalogue', 'Search CNFansSP by product type or the original listing title. Open each candidate’s own product page and compare seller identity, options and price independently. Save the new marketplace and ID so the replacement is easy to distinguish from the stale link.'],
  ], [catalog, goods, converter]],
].map(([slug,title,summary,sections,sources]) => ({slug,title,summary,sections,sources}));

export const faqGroups = [
  ['Catalogue and links', [
    ['What is the LitBuy spreadsheet?', 'A browsable catalogue of CNFansSP listings. It helps you shortlist items and find the original marketplace information before ordering.'],
    ['How do I search for products?', 'Enter a product name or category in the homepage search. Results open on CNFansSP. Try a shorter term if your first search is too narrow.'],
    ['Where do product categories and cards go?', 'Category links open the matching CNFansSP category. A product card opens its CNFansSP detail page.'],
    ['Where do the photos and listed prices come from?', 'Product photos and catalogue prices come from CNFansSP. Confirm the price for your chosen option on LitBuy.'],
    ['Why does Jersey-60 have two numbers?', '6667 is its CNFansSP page number. 7632511460 is the Weidian item ID used in the LitBuy purchase link.'],
    ['How do I open links from Weidian, Taobao or 1688?', 'Copy the full original marketplace URL into LitBuy product search. Check the seller and requested option after it opens.'],
  ]],
  ['Orders and inspection', [
    ['Where can I register for LitBuy?', 'Use the homepage registration button to open the LitBuy registration page.'],
    ['What if an item link returns no result?', 'Open the original seller URL to check availability. If it is stale, search CNFansSP for another listing with the right options.'],
    ['Where do I choose size and colour?', 'Choose them in LitBuy after the item opens. Compare labels with the seller’s size chart and photos.'],
    ['What is a QC photo?', 'It is a warehouse inspection photo of goods received for an order. Review your own order’s inspection images when available.'],
    ['What should I check in QC photos?', 'Compare quantity, visible condition, size labels and colours with your order. Ask support about unclear details before parcel submission.'],
    ['Can I ask about a mismatch after inspection?', 'Open the LitBuy order and include its number, the chosen option and the relevant photos in your support request.'],
  ]],
  ['Warehouse and shipping', [
    ['Does the catalogue price include international shipping?', 'It displays the recorded product price. LitBuy calculates international shipment charges for the parcel you submit.'],
    ['What does consolidation mean?', 'It means grouping eligible stored items into one parcel. Compare lines and estimated costs for the items you want to group.'],
    ['How long is free warehouse storage?', 'LitBuy’s Help Center lists 90 days of free storage. Check the deadline for each stored item in your account.'],
    ['Where can I estimate shipping?', 'Open Freight Estimator from LitBuy and compare available lines using your destination, estimated weight and dimensions.'],
    ['What is volumetric weight?', 'It represents the space occupied by a box. Check the selected line’s rules to see how packed dimensions affect billing.'],
    ['Why did my shipping estimate change?', 'Packing can change measured weight and dimensions. Recheck the line and total quoted for your packed parcel.'],
  ]],
  ['Tracking and after-sales', [
    ['How do I track an international shipment?', 'Use Track Shipment in LitBuy or copy the tracking number from your parcel record to the named carrier’s tracker.'],
    ['Which reference should I use for an item that has not arrived?', 'For a seller-to-warehouse purchase, start with the item order number. For an international delivery, use the parcel and tracking numbers.'],
    ['Can I cancel an item order?', 'Check the current options in your LitBuy order and consult the official Cancel Order information. The available steps depend on order status.'],
    ['How do I request an exchange?', 'Contact LitBuy through the order record with the option you chose, the inspection images and the reason for the request.'],
    ['Where can I check restricted goods?', 'Use the LitBuy Help Center’s Prohibited Items entry and check your shipping line rules for the destination.'],
    ['Who handles support for a paid order?', 'Use LitBuy order or parcel support with the relevant reference. The spreadsheet provides product discovery and outbound links.'],
  ]],
];
export const faqSources = [catalog, jersey, goods, help, direct];

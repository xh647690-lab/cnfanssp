const official = 'https://www.usfans.com'
export const sources = {
  main: ['CNFansSP catalog', 'https://www.cnfanssp.com/AllProducts/'],
  item: ['CNFansSP Jersey-60 listing', 'https://www.cnfanssp.com/AllProducts/6667.html'],
  guide: ['USFans Beginner’s Guide', 'https://usfans.com/beginner-guide'],
  search: ['USFans product search', 'https://usfans.com/search'],
  qc: ['USFans quality check guidance', official + '/help/HCON_STATIC_014'],
  returns: ['USFans return and exchange guidance', official + '/help/HCON_STATIC_006'],
  rules: ['USFans Service Agreement', official + '/page/serviceAgreement'],
  contact: ['USFans Contact Us', official + '/about?key=2'],
  example: ['USFans example listing and shipping estimator', 'https://usfans.com/product/3/7521815220'],
  converter: ['USFans With QC link converter guide', 'https://usfanswithqc.com/link-converter'],
}
export const faq = [
  ['Catalog & links', [
    ['what-is-a-usfans-spreadsheet','What is a USFans spreadsheet?','It is a product directory for browsing and saving seller links. This site draws its catalog from CNFansSP. USFans handles account creation, buying and parcel services.','main'],
    ['search-the-catalog','How do I search the catalog?','Enter an item name or type in the search field. The results open on CNFansSP. Try “Jersey” to find the sample listing.','main'],
    ['open-a-category','Where do the category links go?','Each category tile opens the matching live CNFansSP category. Product cards open the individual CNFansSP detail page.','main'],
    ['find-item-id','Where is the marketplace item ID?','Open the CNFansSP details and check the ID near the product title and the marketplace link. Jersey-60 displays 7632511460.','item'],
    ['supported-marketplaces','Does USFans accept Weidian, Taobao and 1688 links?','USFans identifies these marketplaces as sources. Paste a complete product URL into USFans search and check that the listing resolves.','search'],
    ['link-does-not-load','What if a USFans item link does not load?','Return to the CNFansSP product page, copy the original seller URL, and paste it into USFans search. Check the seller page for removal or a changed listing.','search'],
  ]],
  ['Ordering & prices', [
    ['account','Where do I create an account?','Use the USFans sign-up button to open the platform’s registration page. You can browse this directory before registering.','guide'],
    ['catalog-price','Does the catalog price include delivery?','Use the listed price as a catalog reference. Review the USFans item total, any domestic shipping, and international delivery separately before committing.','guide'],
    ['variants','How do I confirm size and color?','Compare the seller size chart, variant label and quantity with the values on the USFans order screen. Keep a reference to the chosen option.','guide'],
    ['agent-enquiry','How do I ask about a pending order?','Open the order in USFans and use Order Enquiry during purchasing. Include the order reference and the specific detail you need confirmed.','guide'],
    ['seller-stock','Where do I check current stock?','Review the live seller or USFans product page for the specific variant. A catalog card can remain visible after seller availability changes.','search'],
    ['order-cost','When do I pay for international shipping?','The official guide describes submitting and paying for international delivery after choosing items from the warehouse and reviewing parcel details.','guide'],
  ]],
  ['Warehouse & QC', [
    ['what-is-qc','What are QC photos?','They are photos taken during warehouse inspection. Open the photos attached to your own order to examine the received item.','qc'],
    ['find-qc','Where do I find my own QC photos?','Once the item is stored, go to User Center → Warehouse and locate the item.','guide'],
    ['qc-clothing','What should I check in clothing QC photos?','Compare the order’s color, size label and visible condition. For fit-critical items, check measurements if visible or ask about additional photos.','qc'],
    ['qc-electronics','Does standard electronics QC test that the device works?','USFans describes an exterior and accessory check for electronics. Its standard inspectors do not power products on for quality testing.','qc'],
    ['qc-variant-mismatch','What if the item looks different from my order?','Save the order’s SKU and photos showing the mismatch. Check available after-sales actions before adding that item to a parcel.','returns'],
    ['returns-after-qc','How do I request a return or exchange?','Find the order in USFans and open After-sales. Check the eligibility shown for that item, any deadline, and applicable seller or shipping costs.','returns'],
  ]],
  ['Shipping & delivery', [
    ['shipping-estimate','Where can I estimate international shipping?','Use International Shipping Estimate on a USFans product page or the shipping controls shown when creating a parcel. Enter the destination and compare available routes.','example'],
    ['shipping-adjustment','Why can the shipping amount change after packing?','The final shipping charge can depend on verified package size and weight. Check the updated charge and any adjustment in your USFans account.','guide'],
    ['consolidation','Can I ship multiple warehouse items together?','USFans describes selecting warehouse items and combining eligible items into a parcel. Check route limits before submitting it.','guide'],
    ['track-parcel','Where do I track a dispatched parcel?','Go to User Center → Parcels and open the relevant parcel. Follow updates using its tracking reference.','guide'],
    ['missing-scan','What if parcel tracking stalls?','Compare the last update and route estimate. If you need help, send USFans the parcel reference, tracking number and last scan date.','contact'],
    ['restricted-items','How do I check if an item can ship?','Review the purchasing notice and available shipping routes for the item and destination. Ask support about restrictions before paying for uncertain items.','example'],
  ]],
]

export const articles = [
 ['usfans-spreadsheet','How to use a USFans spreadsheet','Find a listing, verify its marketplace ID and carry the correct seller link to USFans.',['main','item','guide'],[
  ['Start with the catalog','Search CNFansSP by product type or name. Open the individual listing to review images and identify the marketplace. For example, Jersey-60 is listed under CNFansSP page 6667, while its seller item ID is 7632511460. Save both links if you want to return to the listing later.'],
  ['Check the exact option','On the seller page, record the size, color and variant as shown on the listing. Compare seller dimensions with an item you already own when measurements are supplied. If the listing looks different after opening it, match the seller and item number before proceeding.'],
  ['Move the seller link to USFans','Paste the original marketplace product URL into USFans search. Confirm the resulting item, option, quantity and displayed order total. Keep the seller link and selected variant handy for later warehouse comparisons.'],
 ]],
 ['usfans-link-converter','USFans link converter for Weidian, Taobao and 1688','Identify the original marketplace listing behind a shared link before opening it in USFans.',['search','converter','item'],[
  ['Find the original listing','Start from the marketplace link on the CNFansSP detail page. If you received another shopping agent’s link, look for its original seller link. Save the marketplace and the full item identifier together because a bare number can be ambiguous across catalogs.'],
  ['Use the supported product URL','Weidian links can carry the item number in itemID. A common USFans Weidian path uses /product/3/ followed by the same number. For Taobao or 1688, paste the original product URL into USFans search and let the platform resolve it.'],
  ['Verify the resolved item','Compare title, seller, major photo details and available variants. If USFans opens an empty page, first check that the original listing is still live. Try the complete seller URL in the official search when a converted link fails.'],
 ]],
 ['how-to-order-on-usfans','How to order on USFans from a seller link','Follow the order from product selection to warehouse intake and parcel submission.',['guide','search'],[
  ['Build the item order','Sign in on USFans and open the seller URL through product search. Select the exact variant and quantity, review the localized product text alongside the original option, and inspect the charges on the order screen before paying.'],
  ['Follow the purchasing stage','USFans purchases from the seller after the order is submitted. If an option needs clarification, use Order Enquiry. Include the order reference, selected SKU and the question so the agent can identify the exact item.'],
  ['Create the international parcel','After intake, check Warehouse and review available photos. Select the eligible items to ship, confirm address and route options, then review the parcel charges. Store the parcel reference separately from your item order.'],
 ]],
 ['usfans-shipping-calculator','USFans shipping calculator and quote comparison','Compare routes using comparable parcel inputs and verify the packed charge.',['example','guide'],[
  ['Start with a consistent estimate','Open International Shipping Estimate on a USFans product page. Use the same destination and weight estimate across routes. Where the interface accepts dimensions, enter the outer parcel dimensions, including protective material.'],
  ['Compare eligible lines','Review available routes for your destination. Consider goods restrictions, weight limits, tracking and delivery estimates alongside displayed charges. A bulky lightweight item may change the quote or the eligible lines once packed.'],
  ['Confirm the final parcel charge','Recheck the warehouse submission after packing. USFans explains that the final fee uses verified parcel size and weight. Compare the final number against your estimate and inspect any adjustment recorded for that parcel.'],
 ]],
 ['usfans-qc-photos','USFans QC photos: a warehouse inspection checklist','Use the photos attached to your own order to check the item before international shipping.',['qc','guide','returns'],[
  ['Open the warehouse record','Find your item in User Center → Warehouse. Compare the photos there with your seller listing and exact SKU. Start with color, labels, quantity and obvious damage, then look at the details that affect your use of the product.'],
  ['Check what the photos can show','For clothing, compare the size tag and any photographed measurements with the seller chart. For electronics, the official standard check covers external condition and accessories. Ask about additional confirmation when a necessary measurement or angle is missing.'],
  ['Document a problem before shipping','Save the warehouse photo showing the issue and your original selected variant. Open After-sales or contact support with the order reference. Review the available action and deadline before including that item in a parcel.'],
 ]],
 ['usfans-warehouse-consolidation','USFans warehouse consolidation and parcel packing','Decide which items belong in a parcel and what to check before submission.',['guide','example'],[
  ['Review items individually','Look at each warehouse record before consolidating. Mark items with unresolved size, condition or quantity questions so they stay out of the parcel while you wait for clarification.'],
  ['Build a parcel around the route','Group items by the shipping lines available for your destination and goods type. Compare a single parcel with separate eligible parcels using the shipping estimator. Outer dimensions can matter when bulky packaging changes the available route.'],
  ['Review the warehouse submission','Confirm the items selected, destination address and any packing services. After packing, check the recorded final size, weight and charge, and keep the parcel reference for tracking.'],
 ]],
 ['usfans-order-tracking','USFans order and parcel tracking explained','Distinguish seller dispatch, warehouse arrival and international tracking.',['guide','contact'],[
  ['Identify the stage','Use the item order to follow purchasing and delivery to the warehouse. Once there, use Warehouse to check intake and inspection. Use Parcels to follow the international shipment after dispatch.'],
  ['Read the scan history','Keep the parcel number and tracking number together. Compare the latest scan date with the route estimate. Record the exact status text and time of the last update before contacting support.'],
  ['Send a precise enquiry','For a purchasing issue, provide the item order reference and selected option. For an international parcel issue, send the parcel reference, tracking number, last scan and destination. Avoid sharing addresses or account details in public channels.'],
 ]],
 ['usfans-returns-and-exchanges','USFans returns and exchanges after warehouse QC','Check eligibility, collect evidence and use the order’s after-sales controls.',['returns','rules','qc'],[
  ['Check what the order offers','Open Orders and locate the item, then review its After-sales controls. Eligibility can depend on seller rules, item condition and timing. Read the order-specific deadline and any charges presented before making a request.'],
  ['Describe the issue with evidence','Provide the selected variant and the variant shown in warehouse photos. Attach a clear image of a wrong label or visible defect and say whether you prefer replacement or return, subject to the choices offered.'],
  ['Track the request before shipping','Keep the item out of the international parcel while the request is open. Review the response for seller acceptance, shipping charges and expected next steps, and retain the case reference.'],
 ]],
 ['usfans-fees-and-total-cost','USFans fees: from catalog price to parcel total','Build an order estimate that includes the charges you actually see.',['main','guide','example'],[
  ['Write down the item-stage amounts','Record the variant price from the agent’s order screen and any domestic delivery charge shown. Treat the CNFansSP price as a catalog figure and keep a separate row for each purchased item.'],
  ['Estimate international freight','Quote the route for the destination using the best available packed size and weight. Factor in any selected packaging or insurance shown in the order and destination charges that may apply. Check the amount and currency before funding the order.'],
  ['Reconcile the estimate','After packing, compare the final invoice with your estimated freight and add the item-stage charges again. Update your budget if the route changed, the packaging grew or the parcel shows a shipping adjustment.'],
 ]],
 ['usfans-size-chart-and-variants','Check USFans sizes and variants before buying','Turn a product name into a specific size, color and SKU you can verify at intake.',['item','guide','qc'],[
  ['Measure a good-fitting reference','For a shirt or jersey, lay a comparable garment flat and measure chest width and body length. Check how the seller took its measurements. Match like for like, especially if a chart describes full circumference instead of flat width.'],
  ['Record the exact order option','Keep the original size chart and a record of the color and option label chosen on USFans. Confirm size, variant and quantity before payment. Ask about sizing if the product page and chart offer conflicting information.'],
  ['Compare once the item arrives','Match the warehouse label and visible details to the original option. If photos fail to show a critical dimension, ask about additional photos or measurements before shipping. Use the order’s after-sales controls if the received option differs.'],
 ]],
].map(([slug, title, description, refs, sections]) => ({ slug, title, description, refs, sections, date: '2026-11-25' }))

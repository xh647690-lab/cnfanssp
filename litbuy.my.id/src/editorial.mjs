export const help = 'https://litbuy.com/help';
const links = 'https://litbuysheetlinks.com/tools/litbuy-link-converter';
const guides = 'https://litbuyspreadsheet.io/guides/';
const topics = 'https://litbuy.ink/guides/';

export const articles = [
['litbuy-spreadsheet', 'LitBuy Spreadsheet: How to Check a Listing Before Ordering', 'Turn a CNFansSP listing into a verified product shortlist.', [
['Record the seller link', 'Start with the product card, open its CNFansSP detail page, and record the marketplace and item ID shown there. In this catalogue, Jersey-60 is a worked example: its CNFansSP record points to Weidian item 7632511460. A similar title, thumbnail or price on a different listing is insufficient to establish a match.'],
['Check the option in LitBuy', 'Open the verified seller link through LitBuy. Select the exact variant and check the option name, price and quantity together. A listing may group multiple styles, and the lowest displayed amount may correspond to a different option. Keep a note with the item ID and selected size and color.'],
['Budget before committing', 'Treat the catalogue amount as a reference. Confirm the current price in LitBuy and keep separate amounts for merchandise, domestic delivery, optional services and the international parcel. If an option disappears, reopen the original listing and start the comparison again before buying.'],
], [help, links]],
['litbuy-link-converter', 'LitBuy Link Converter: Weidian, Taobao and 1688 URLs', 'Keep the source marketplace and item ID intact during conversion.', [
['Identify the marketplace', 'For Weidian links look for the itemID query parameter. Taobao links commonly use id, and 1688 offer links include the number in the path. An ID makes sense together with its marketplace. A short or wrapped URL may need to be opened first to reveal the original listing.'],
['Use the original link as the check', 'Paste the seller link into LitBuy’s search to resolve the product. For the verified Weidian sample, the desktop LitBuy route uses /product/2/7632511460. Compare the listing title and option controls against the seller page after opening it.'],
['Diagnose a broken link', 'If LitBuy cannot load the listing, try the original marketplace page and check whether the seller still offers it. Then check the marketplace selection and copy the complete URL again. If a replacement uses a different item ID, treat it as a separate listing and recheck the seller, options and price.'],
], [help, links]],
['litbuy-qc', 'LitBuy QC Photos: A Warehouse Inspection Checklist', 'Use warehouse photos to check what arrived before shipping it overseas.', [
['Match the order to the photo set', 'Write down your order number, expected quantity, option label and size before opening the photos. Check the item and packaging labels where visible. For a set, count the pieces in the photos and compare the count with the option you paid for.'],
['Ask for a specific photograph', 'If the listing specifies dimensions, ask whether a photo with a tape measure is available. For a jacket, name the exact measurement and describe the endpoints. For shoes, ask for the size label and the angle needed to see a visible defect. A specific request helps you interpret the result and gives support something concrete to check.'],
['Decide while the order is in the warehouse', 'If a mismatch matters, save the photos and send a short message connecting each issue to a listing detail. Check available after-sales options and wait for an answer before including the item in a parcel. Photos provide a visual check and have limits for fit, color and performance.'],
], [help, guides]],
['litbuy-shipping-cost', 'LitBuy Shipping Cost: How to Compare Parcel Quotes', 'Compare route estimates with the same destination and parcel assumptions.', [
['Collect consistent inputs', 'Use the destination, packed weight and dimensions expected for a single parcel. Check the line’s restrictions for the items inside. Comparing one unpacked estimate with another packed quote makes it difficult to tell whether a price difference comes from the route or its inputs.'],
['Read the price components', 'Record the base quote, any handling or packaging line items, applicable discounts and the total shown. Review the delivery estimate and any coverage terms shown for the route. Keep possible charges at delivery separate from the amount payable to LitBuy so you can compare full cost on the same basis.'],
['Recheck when packing is complete', 'Parcel dimensions and weight can change after consolidation. Repeat the comparison when final measurements become available. If removing packaging lowers the quote, consider whether the box protects fragile contents and verify any packaging choices available for your order before submitting it.'],
], [help, topics]],
['litbuy-volumetric-weight', 'LitBuy Volumetric Weight: Actual vs. Billable Weight', 'Estimate how a bulky carton can change the shipping comparison.', [
['Find the line’s measurement rules', 'Some routes use dimensions as well as scale weight. Read the route’s published divisor, units, rounding and minimum-weight rules before doing any calculation. Use the exterior dimensions of the packed carton, including the shipping box.'],
['Run the same example on both weights', 'Suppose a carton is 40 × 30 × 25 cm and weighs 3 kg. If a route uses a divisor of 6,000 with those dimensions in centimeters, its dimensional weight is 5 kg. A route that bills the greater of both figures would start at 5 kg before any rounding. The divisor here illustrates the calculation. Check the actual line for its own rules.'],
['Compare after repacking', 'Ask whether a smaller carton or removal of unnecessary packaging is possible. Recalculate from the revised dimensions, then compare the savings with the cost of repacking and the protection the item needs.'],
], [help, guides]],
['litbuy-tracking', 'LitBuy Order Status and International Parcel Tracking', 'Find the right reference for the stage where your order has stopped.', [
['Distinguish orders from parcels', 'An order follows the item from purchase through warehouse intake. An international parcel follows the shipment you submit, and it can contain multiple orders. Start by opening the corresponding order or parcel record in LitBuy so you can see the last status tied to that reference.'],
['Read the last confirmed update', 'If the order is still with the seller or awaiting warehouse intake, an international tracking number may not exist. Once LitBuy shows a tracking number against the parcel, compare the parcel record with the carrier’s official tracking page. Note the time and location of the last scan.'],
['Prepare a concise support request', 'Send the relevant order or parcel ID, tracking number if available, destination and timestamp of the last recorded update. Explain whether you are asking about seller dispatch, warehouse processing or carrier delivery. Attach only screenshots that help show the status or discrepancy.'],
], [help, guides]],
['litbuy-size-guide', 'LitBuy Size Guide: Read Seller Measurements Before Checkout', 'Compare a garment you own with the chart for the exact listing.', [
['Measure a comparable item', 'Lay a garment that fits flat and record the width and length using the points in the seller chart. For a shirt, that may mean pit-to-pit width and shoulder-to-hem length. Use centimeters and write down exactly where you measured.'],
['Check what the numbers represent', 'A chart that lists chest circumference is using a different measure from a flat-width chart. For example, 55 cm across a garment laid flat is roughly 110 cm around if the front and back widths are comparable. Match the units and chart conventions before making a size comparison.'],
['Preserve the option and check the label', 'Keep the chart beside the exact marketplace listing and variant. If the size chart is unclear, clarify it before ordering. Once the item reaches the warehouse, use the SKU label or request a specific measurement if supported. Compare the result before adding the garment to your parcel.'],
], [help, guides]],
['litbuy-returns-storage', 'LitBuy Returns and Storage: What to Check at the Warehouse', 'Gather evidence and check the order-specific deadlines before shipment.', [
['Find the dates for this order', 'Open the warehouse order and check the intake date and any storage or return information shown for it. Review LitBuy’s official help for the procedure applicable to that item. Store the relevant dates beside the order number and check them before grouping the item with other orders.'],
['Document the discrepancy', 'Save the original option label, warehouse photos and a short description of what differs. If a size label or quantity is at issue, point to the photo that shows it. Ask what return or exchange options apply to this order and what charges would be deducted.'],
['Wait for the outcome before creating the parcel', 'Keep the item out of the international shipment while you consider your options. Once LitBuy replies, check the proposed replacement, refund amount or local return costs against your original order. Return eligibility, fees and timing depend on the order and its current terms.'],
], [help, guides]],
['litbuy-coupons', 'LitBuy Coupons: Compare the Price You Actually Pay', 'Test eligibility against the selected parcel before counting a discount.', [
['Read the coupon in your account', 'Check the redemption deadline, minimum amount, selected service and any route restrictions. Record whether the discount applies to merchandise, international freight or another line item. Use the terms displayed in LitBuy for the promo you can actually select.'],
['Compare like-for-like totals', 'Keep the destination, packing options and parcel dimensions fixed. For example, if one route shows 45 before discount and 38 after, compare the actual 38 with a second route’s total, then consider delivery and coverage. A larger percentage alone gives little information about the payable amount.'],
['Record the final quote', 'Apply the coupon if the checkout offers it and verify the deduction appears before confirming payment. If it fails, check the eligibility rules and quote components first. Recheck the total after changing the route or package because either choice may affect the promotion.'],
], [help, topics]],
['litbuy-parcel-consolidation', 'LitBuy Parcel Consolidation: When to Combine Warehouse Orders', 'Compare a combined parcel against two separate shipments using the same items.', [
['List the warehouse items', 'Record which orders are ready and their dimensions, weights and packaging needs. Verify that all selected items are eligible for a common route to your destination. Set aside anything still awaiting QC, a return decision or a needed replacement.'],
['Quote two packing scenarios', 'Compare one combined carton with two smaller parcels. A combined shipment may reduce duplicated base charges, while a large carton may change billable weight or route availability. Compare the total for each scenario and add the packaging or service costs listed for it.'],
['Check storage and final packing', 'If a later order would delay a parcel, check how long the earlier items can stay in the warehouse and whether you need them sooner. Confirm the final set of items, parcel dimensions and paid route before submitting the shipment. Keep the order-to-parcel mapping for tracking and support.'],
], [help, guides]],
];

export const faq = [
['What is a LitBuy spreadsheet?', 'It is a product directory. This preview uses live CNFansSP listings and links each product back to its CNFansSP detail page.'],
['Where does product data come from?', 'Product titles, images and listed prices are read from CNFansSP. The original seller and agent listings can change after a catalogue entry is published.'],
['How do I search the catalogue?', 'Enter keywords on the home page. The search opens matching results on CNFansSP.'],
['Do I need a LitBuy account to browse?', 'The catalogue is public. Use LitBuy’s registration button to create an account when you want to use the agent.'],
['Where do the categories lead?', 'Each category leads to the corresponding CNFansSP category page.'],
['What does product ID 7632511460 identify?', 'CNFansSP lists it as the Weidian item ID for Jersey-60. The CNFansSP page number for that listing is 6667.'],
['How do I open a Weidian item in LitBuy?', 'Copy the original Weidian link from the product detail page and paste it into LitBuy search. Check that the resolved listing matches the item ID.'],
['Can I use a Taobao or 1688 link?', 'Use the full seller URL in LitBuy search. Verify the marketplace, product options and current price after it resolves.'],
['What if the product link is broken?', 'Open the original seller URL and check that the listing still exists. Verify the marketplace and item ID before treating another listing as a replacement.'],
['What does the catalogue price include?', 'The card shows the source catalogue amount. Check the selected option price and any shipping or service charges in LitBuy.'],
['How do I check the selected variant?', 'Read the exact option label and compare color, size, quantity and price with the seller listing. Save the label for a later QC check.'],
['How do I choose a clothing size?', 'Measure an item you already own and compare matching points, units and chart conventions with the selected seller’s size chart.'],
['What are QC photos?', 'They show the item in the warehouse. Compare visible labels, color, quantity and any requested measurements before submitting the international parcel.'],
['What if the QC photos show the wrong item?', 'Save the order ID, option label and photos of the discrepancy. Contact LitBuy from the order and check available after-sales options before shipping.'],
['How can I estimate international shipping?', 'Use the destination, packed dimensions and weight to compare eligible routes. Review the final price when packing information becomes available.'],
['What is volumetric weight?', 'It is a weight calculated from parcel dimensions. Check the divisor, units and billing rules for the particular shipping line.'],
['Can warehouse orders share a parcel?', 'Check route compatibility for the selected items and compare the combined quote with separate shipments before submitting a parcel.'],
['How long can items stay in storage?', 'Check the order’s warehouse dates and current LitBuy storage rules, including any extension fees or limits.'],
['Can I return or exchange an item?', 'Check the order-specific deadline, eligibility and possible local costs through LitBuy. Provide the order reference and photos if something is wrong.'],
['Where can I track a parcel?', 'Open the LitBuy parcel record for a tracking number and use the carrier’s official tracking page once the number is available.'],
['How do I check a LitBuy coupon?', 'Read its deadline, minimum spend, eligible services and routes. Apply it in checkout and verify the actual deduction before paying.'],
['Does switching language translate seller data?', 'The language switch changes site navigation and interface text. Product and category names are displayed as supplied by CNFansSP.'],
];

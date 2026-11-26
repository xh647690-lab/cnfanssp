const guide = ['USFans Beginner’s Guide', 'https://usfans.com/beginner-guide']
const catalogue = ['CNFansSP product catalogue', 'https://www.cnfanssp.com/AllProducts/']
const product = ['USFans product page example', 'https://usfans.com/product/3/7809521351']
const estimate = ['USFans shipping estimator', 'https://usfans.com/estimation']
const competitor = ['Spreadsheet and link research', 'https://rep.tools/guides/usfans-spreadsheet']
const shippingResearch = ['Chargeable-weight topic research', 'https://usfanss.org/en/faq']

export const guides = [
  {
    slug:'usfans-spreadsheet', title:'How to use a USFans spreadsheet', summary:'Find a product on CNFansSP and keep the seller listing attached to your shortlist.',
    sources:[catalogue, guide, competitor],
    sections:[
      ['Start with the listing you can verify', 'Search a product type on CNFansSP, then open the detail page for each candidate. Write down the seller marketplace and the original listing URL. Catalogue titles can be short, so verify the images and available options on the seller page before deciding whether two search results are actually comparable.'],
      ['Build a useful shortlist', 'Keep the seller URL, intended size or color, and the price for that option together. If two listings look alike, compare their measurement tables and what the selected option includes. A cheaper listing can represent a different configuration, quantity, or condition.'],
      ['Hand off the exact product', 'Open the supported USFans link or paste the original marketplace URL into USFans. Compare the marketplace, item number, and selected option on the USFans page with your notes before ordering. Use the catalogue again if the seller removes the listing or the option becomes unavailable.']
    ]
  },
  {
    slug:'how-to-order', title:'How to order on USFans', summary:'Follow the item from the seller link through warehouse inspection and parcel submission.',
    sources:[guide],
    sections:[
      ['Check the cart before paying', 'Paste the seller URL in USFans and confirm the exact color, size, and quantity. Read the order summary for the item charge and domestic delivery. If the order needs a note, spell out the selected option and the detail that needs confirmation.'],
      ['Follow the order to the warehouse', 'After ordering, keep the order number handy. Use Order Enquiry for questions about the individual purchase. Once the warehouse records the item, open Warehouse in User Center and inspect the photos before choosing what to ship.'],
      ['Submit the international parcel', 'Select the inspected items, check the delivery address, and compare the available routes and parcel options. Keep the parcel number and shipping estimate. The official beginner guide explains the shipping deposit and the adjustment that can follow carrier measurement.']
    ]
  },
  {
    slug:'weidian-taobao-1688-links', title:'USFans links for Weidian, Taobao and 1688', summary:'Identify the marketplace and carry the right listing ID into USFans.',
    sources:[product, guide, competitor],
    sections:[
      ['Identify the original marketplace', 'Open the original seller link from the product detail page. A Weidian item typically carries an itemID parameter. A Taobao item link commonly uses an id parameter, while a 1688 offer can carry its ID in the URL path. Keep the marketplace and ID together because the number alone does not identify the source.'],
      ['Use the listing to check the conversion', 'The USFans product URL uses a marketplace segment in front of the listing ID. A Weidian example uses /product/3/{id}. If you are working from a shared agent link, locate the underlying product and paste the original seller URL into USFans. Verify the source marketplace and item options on the result.'],
      ['Recover from a broken link', 'Follow a short link to its final seller item page before copying it. A shop homepage, search page, or promotional campaign link may not identify an individual item. If the seller listing is unavailable, use the category page to find another listing and compare its options before placing an order.']
    ]
  },
  {
    slug:'qc-photo-checklist', title:'USFans QC photos checklist', summary:'Inspect the actual item received at the warehouse before submitting it for shipping.',
    sources:[guide, product],
    sections:[
      ['Check the ordered option first', 'Open the warehouse entry for the relevant order. Compare the visible tag, color, size, and quantity with your order details. For a jersey or printed garment, check placement and spelling on the front and back. For shoes, check both pieces and verify any visible size labels.'],
      ['Ask for a view that resolves the question', 'If a seam, mark, or measurement is unclear, name the exact area and request a well-lit close-up or a full-width measurement. Keep the order number and save the original product selection so support can compare the warehouse item against the intended option.'],
      ['Raise discrepancies while the item is at the warehouse', 'Contact USFans about mismatched options, missing pieces, or damage before adding the item to a parcel. Ask which remedies are available for that order and what evidence or timing applies. Check the seller-specific and warehouse terms before authorizing the shipment.']
    ]
  },
  {
    slug:'shipping-estimate', title:'How to use the USFans shipping estimate', summary:'Compare routes against the same parcel assumptions and identify costs that may change.',
    sources:[estimate, guide, shippingResearch],
    sections:[
      ['Gather parcel inputs', 'Start with the destination, approximate packed dimensions, and total weight. A product page can show an item estimate, but the parcel includes packing material and may combine multiple items. Ask for updated measurements if a small size difference could change the available routes.'],
      ['Compare like for like', 'Use the same destination and measurements for each route. Record what the quote includes, delivery constraints, and any cutoff or surcharge shown. When two routes bill weight differently, compare the resulting estimates rather than comparing their advertised price per kilogram.'],
      ['Recheck after packing', 'Review the packed dimensions and weight before paying the quoted shipping amount. USFans describes a deposit and a final fee based on carrier-verified measurements. Keep a copy of the estimate and compare it with the parcel record if the final charge differs.']
    ]
  },
  {
    slug:'volumetric-weight', title:'USFans volumetric weight explained', summary:'Understand why light, bulky parcels can cost more to ship than their scale weight suggests.',
    sources:[estimate, shippingResearch],
    sections:[
      ['Separate scale weight from size', 'Actual weight is the packed parcel’s weight on a scale. Volumetric weight converts its external dimensions into a weight equivalent. A bulky box can take up more space than a small parcel of the same weight, so some routes use the greater of these figures.'],
      ['Use the selected route’s divisor', 'Where the route specifies the formula in centimeters, multiply length by width by height and divide by its stated divisor. For illustration, 40 × 30 × 20 cm divided by 6,000 gives 4 kg. With an actual weight of 3 kg, a route taking the higher number would start from 4 kg before any rounding or minimum charge.'],
      ['Check whether packing can help', 'Compare a smaller box against the original dimensions while keeping the item’s protection needs in mind. Removing empty space may help on a volume-priced route. Re-run the estimate with the final packed measurements and check the route’s actual divisor and billing rules.']
    ]
  },
  {
    slug:'warehouse-consolidation', title:'USFans warehouse and parcel consolidation', summary:'Decide which inspected items belong together and compare packed costs before submitting.',
    sources:[guide, estimate],
    sections:[
      ['Check readiness item by item', 'Use Warehouse to see which orders have arrived and which still need inspection or follow-up. Keep an unresolved item out of the parcel while you wait for the warehouse or agent to confirm its status. Check the applicable storage terms if another order will take longer.'],
      ['Compare one parcel with a split shipment', 'List the items, dimensions, and fragility for each possible parcel. A single parcel can simplify tracking, while splitting may help when an item has different route restrictions or packing needs. Compare real quotes based on plausible packed dimensions before choosing.'],
      ['Verify the submitted parcel', 'Review the included orders, delivery address, and selected route in the final parcel view. Save the parcel ID and keep the item order numbers for follow-up. Tracking is available from the parcel area after dispatch, according to the USFans beginner guide.']
    ]
  },
  {
    slug:'fees-and-total-cost', title:'USFans fees and total order cost', summary:'Budget for the item, delivery to the warehouse, and delivery to your destination.',
    sources:[guide, estimate, shippingResearch],
    sections:[
      ['Start with the exact variant price', 'Write down the listed price for the selected size, quantity, or model. Then open the USFans order summary to see the item charge and Chinese domestic delivery. If your payment currency differs, record the amount and currency actually shown on the payment screen.'],
      ['Track the international charges separately', 'Estimate international shipping using the destination and anticipated parcel dimensions. Add any services that appear in your selected checkout. Keep possible destination charges as a separate allowance and check the terms for your specific route and delivery country.'],
      ['Keep the estimate comparable', 'A simple budget can have columns for listing, item subtotal, domestic delivery, international estimate, and selected extras. Update the final column after packing. A worked subtotal of ¥99 for an item and ¥10 for local delivery is ¥109 before international shipping or other charges. The numbers illustrate the calculation only.']
    ]
  },
  {
    slug:'order-tracking', title:'USFans order and parcel tracking', summary:'Use the right reference for seller, warehouse, and carrier updates.',
    sources:[guide],
    sections:[
      ['Separate the order from the parcel', 'The item order describes the purchase from the seller. The parcel describes the international shipment created from warehouse items. Before looking for a carrier update, confirm that the products have arrived at the warehouse and the relevant parcel has been dispatched.'],
      ['Read the latest recorded event', 'Open User Center and use the parcel record to find tracking after dispatch. Compare the timestamp and location of the most recent event. If a local carrier is listed, use the number in the parcel record to verify the handoff. Keep the original record if the carrier has yet to display an event.'],
      ['Send an enquiry with specific details', 'Record the order or parcel number, the last tracking event, and the issue you want checked. Use Order Enquiry for a seller purchase or parcel support for a shipment. After delivery, use the parcel record to ask about any damage or missing contents and retain supporting photos.']
    ]
  },
  {
    slug:'returns-and-after-sales', title:'USFans returns and after-sales enquiries', summary:'Document a discrepancy and contact USFans at the correct stage of the order.',
    sources:[guide, product],
    sections:[
      ['Capture the order evidence', 'Save the ordered option, the seller description, and the order number. Compare those with the warehouse images or the item you received. Describe the mismatch in plain terms, such as a size label that differs from the order or an accessory shown as missing.'],
      ['Ask what applies to the specific item', 'Check the After Sales and Purchasing Notice information available on the product page or order. Ask about the seller’s applicable conditions, any requested photos, and costs before agreeing to a return or exchange. Raise warehouse issues before submitting the parcel when possible.'],
      ['Use the parcel record for a delivery issue', 'If the problem appears after delivery, use the relevant parcel record to find the after-sales option. Keep outer packaging photos, the parcel label, and item photos together. In your message, include the affected order and which resolution you are requesting.']
    ]
  }
]

export const faqs = [
  ['What is a USFans spreadsheet?', 'It is a product directory. This preview displays listings from CNFansSP and links to the original records.'],
  ['What is USFans?', 'USFans is a shopping agent that describes purchasing, warehouse inspection, and international shipping in its beginner guide.'],
  ['Do I need an account to browse?', 'The catalogue is public. Use the USFans registration link when you are ready to access account features.'],
  ['Where do I sign up?', 'Use Join USFans in the header to open the registration page on usfans.com.'],
  ['How do I search for a product?', 'Enter a product name in the homepage or catalogue search box. The search opens results on CNFansSP.'],
  ['How do I find more products in a category?', 'Open Categories and choose a category. Its link goes to the corresponding CNFansSP page.'],
  ['Where do the product images come from?', 'The product cards load images directly from CNFansSP, the source of the catalogue.'],
  ['What is the difference between a catalogue record ID and a marketplace ID?', 'The catalogue record identifies the CNFansSP page. The marketplace ID belongs to the seller listing and is used with its marketplace when opening it in USFans.'],
  ['How do I open a Weidian listing in USFans?', 'Use the USFans button where available, or paste the original Weidian item link into the USFans search box.'],
  ['Can I use Taobao or 1688 links?', 'The USFans beginner guide describes ordering from both. Paste the exact seller listing and verify its selected options in USFans.'],
  ['What if a seller link opens a shop page?', 'Find the specific product on that shop page and copy its item URL. The shop URL does not identify the listing.'],
  ['What should I check before I pay?', 'Confirm the size, color, quantity, displayed item charge, and any domestic delivery fee.'],
  ['What are QC photos?', 'They are warehouse inspection photos. Use them to check visible details of the item received at the warehouse.'],
  ['Where do I find my QC photos?', 'Open the warehouse entry for the relevant order in the USFans User Center after the item is stored.'],
  ['What should I do if a QC photo is unclear?', 'Ask support for a specific angle or measurement and provide the order reference and detail you want checked.'],
  ['How do I estimate international shipping?', 'Use the USFans shipping estimator with the destination and expected packed weight and dimensions. Recheck against the final parcel.'],
  ['What is volumetric weight?', 'It converts parcel dimensions to a weight equivalent using the selected route’s divisor where applicable.'],
  ['Can I combine multiple warehouse items?', 'The USFans guide describes selecting and consolidating warehouse items. Compare route restrictions and packed costs for your selection.'],
  ['What is the shipping deposit?', 'The beginner guide describes an upfront shipping payment that can be adjusted after the carrier confirms parcel size and weight.'],
  ['Where do I track a dispatched parcel?', 'Go to User Center, then Parcels, and open the record for the shipment.'],
  ['Where do I report a wrong or damaged item?', 'Use the relevant order enquiry or parcel after-sales entry. Include the order or parcel number and photos that show the issue.'],
  ['Can I request a return?', 'Check the product’s after-sales terms and ask USFans which options apply to the order. For warehouse discrepancies, raise the issue before parcel submission.'],
  ['What if the catalogue price differs from the USFans order?', 'Verify the variant and currency, then review the current USFans order summary and any delivery or service charges.'],
  ['What if an item goes out of stock?', 'Reopen the seller listing to confirm availability. If you choose another listing, compare its options and measurements before ordering.']
]
export const faqSources = [guide, catalogue, estimate]

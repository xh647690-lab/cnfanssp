export const official = 'https://hipobuy.com/';
const spreadsheet = 'https://www.hipo-sheets.com/';
const beginner = 'https://hipobuy-spreadsheet.com/guides';
const rehearsal = 'https://repgalaxy.tips/hipobuy-spreadsheet';

export const articles = [
  {
    slug: 'hipobuy-spreadsheet',
    title: 'How to use a HipoBuy spreadsheet to build a shortlist',
    summary: 'Use the catalog to compare listings, then verify the exact option with the seller.',
    sections: [
      ['Search for the item', 'Start with a product type or a short listing name. This spreadsheet sends searches to CNFansSP, where you can open the results and check their category. If the full name returns nothing, remove the color and size terms first. A marketplace item ID may be absent from the searchable listing title.'],
      ['Record the option, not just the link', 'Open the CNFansSP detail and find the original seller link where available. Save that URL alongside the color, size and quantity. Two cards with similar pictures can lead to different sellers, and one seller page can contain several options with different prices. Keep the seller and the option associated with each candidate.'],
      ['Decide when a listing is ready', 'Compare the live option, its measurements and its current price before you paste the seller link into HipoBuy. Mark candidates with missing options or broken links as unresolved. If a replacement uses a different seller or marketplace ID, review its details from scratch before adding it to your shortlist.'],
    ],
    sources: [spreadsheet, official],
  },
  {
    slug: 'how-to-buy',
    title: 'How to buy through HipoBuy using a seller link',
    summary: 'Follow the order from the original listing through warehouse inspection and dispatch.',
    sections: [
      ['Open the original listing', 'Start by locating the marketplace URL from the CNFansSP product detail. Paste that seller URL into HipoBuy. Check that the listing shown in HipoBuy matches the original product and that the color, size and quantity describe the option you want. Keep the seller link in your notes.'],
      ['Review the order amount', 'Review the product amount and any seller-to-warehouse delivery charge shown before placing the order. The first payment and the later international parcel quote cover different stages of the purchase. Save the order reference so you can find it when the item enters the warehouse.'],
      ['Wait for the warehouse check', 'HipoBuy describes warehouse acceptance and quality inspection after receipt. Review the inspection against your selected variant before moving the order into a parcel. Once the items are ready, review packing, the delivery address and the live route quote before submitting the parcel.'],
    ],
    sources: [official, beginner],
  },
  {
    slug: 'qc-photos',
    title: 'HipoBuy QC photos and what to check before shipping',
    summary: 'Compare warehouse images with your selected variant and measurements.',
    sections: [
      ['Identify the order first', 'Find the inspection associated with your own order reference. Compare the visible option with the saved listing and selected size. For shoes, check both sides and labels when visible. For a shirt, look for the size tag, print placement and any visible damage.'],
      ['Use photos for visible questions', 'A photo can show a scratch or a misplaced label. Camera angle and lighting can affect shape and color, so check more than one view when available. For fit questions, a measurement taken flat at a specific point is more informative than guessing from a close-up. Photos alone cannot establish authenticity or long-term durability.'],
      ['Ask a specific follow-up', 'If the item appears different, name the exact mismatch and save the photo or order reference. For an unclear issue, tell HipoBuy support which view or measurement would resolve it. Review available after-sales options while the item is still in the warehouse and before including it in an international parcel.'],
    ],
    sources: [official, spreadsheet, beginner],
  },
  {
    slug: 'shipping-calculator',
    title: 'How to estimate HipoBuy shipping before submitting a parcel',
    summary: 'Compare live route estimates using the same destination and parcel measurements.',
    sections: [
      ['Use the same inputs', 'Enter the destination and the parcel weight and dimensions requested by the estimator. Early measurements are planning assumptions. Grouping items or changing packaging can change the chargeable size. Record which measurements you used so you can compare the early estimate with the packed parcel quote.'],
      ['Compare route conditions', 'Check whether each route accepts the contents and serves your address. Compare the amount alongside tracking, expected transit and any available insurance terms. Rates and eligibility can vary by item type and destination, so use the current HipoBuy quote before deciding.'],
      ['Keep a budget buffer', 'Separate the product amount and seller-to-warehouse freight from the estimated international charge. Account for packing options you select and check the final amount in the parcel screen. If you evaluate two parcels, quote each individually and compare the combined cost with one larger parcel.'],
    ],
    sources: [official, 'https://repsheet.net/tutorials/rep-spreadsheet-agents'],
  },
  {
    slug: 'rehearsal-parcel',
    title: 'HipoBuy Rehearsal Parcel and the pre-dispatch review',
    summary: 'Use packed dimensions to revisit your route and packaging choices.',
    sections: [
      ['Review the contents', 'Before requesting a rehearsal option that appears in your account, make a list of the stored orders you want to send. Complete any QC follow-ups first. Note packaging you need to keep and ask how the available options affect protection, weight and parcel dimensions.'],
      ['Compare the packed information', 'Use the rehearsal result, if available, to check whether the parcel contains the intended orders and whether packed dimensions differ from your estimate. Update route comparisons with these inputs. Box size can be important when a route uses volume as part of its chargeable weight.'],
      ['Confirm dispatch separately', 'Review the destination address, line restrictions, shipping charge and optional coverage in the final parcel screen. Keep the confirmation and parcel reference. Availability and charges for rehearsal or packing can change, so use what HipoBuy currently displays for your parcel.'],
    ],
    sources: [official, rehearsal],
  },
  {
    slug: 'warehouse-consolidation',
    title: 'How to plan HipoBuy warehouse consolidation',
    summary: 'Combine orders after checking arrival, inspection and route requirements.',
    sections: [
      ['Make an arrival list', 'Write down the order references from each seller and mark whether each item has arrived and cleared your inspection. HipoBuy describes combining products already stored in its warehouse. If one seller is delayed, check your account for current storage deadlines on the earlier arrivals.'],
      ['Try two packing plans', 'Build one list for the combined parcel and another for a split shipment. Consider bulky packaging, items with route restrictions and anything that needs protection. Compare estimates for both plans using the same destination and check each plan’s eligible services.'],
      ['Submit the selected orders', 'Compare the parcel contents with your arrival list before submitting. Confirm the real packed measurements and current charge if available. After dispatch, keep the parcel reference with the order IDs it contains so tracking or support questions can be tied back to the right items.'],
    ],
    sources: [official, beginner],
  },
  {
    slug: 'taobao-weidian-1688-links',
    title: 'Using Taobao, Weidian and 1688 links with HipoBuy',
    summary: 'Identify the seller URL and troubleshoot a link that does not import cleanly.',
    sections: [
      ['Find the seller page', 'Open the CNFansSP detail and follow the original marketplace link where it is provided. If you have a share link, open it and confirm that it resolves to the item page rather than a seller profile or search results. Keep the marketplace name and item ID together.'],
      ['Check the imported information', 'Paste the resolved item URL into HipoBuy and compare the title, photos and option labels with the seller page. For listings with quantity tiers, check the minimum quantity and the option-level price. If something differs, avoid selecting an option based only on its position in the list.'],
      ['Handle unavailable links', 'Open the original link again to determine whether the seller has removed the listing or changed the URL. If it still works but the import fails, share the marketplace URL and wanted option with HipoBuy support. When looking for a substitute, compare seller and variant details again.'],
    ],
    sources: [official, beginner],
  },
  {
    slug: 'fees-and-coupons',
    title: 'How to compare HipoBuy fees, prices and coupons',
    summary: 'Track the item order and international parcel charges as separate amounts.',
    sections: [
      ['Compare the same variant', 'Record marketplace price for the selected size or color, quantity and seller-to-warehouse freight when shown. Then compare the live HipoBuy checkout amount in the displayed currency. A catalog figure is a reference, and the final amount may reflect later pricing or conversion.'],
      ['Read the coupon conditions', 'If your account shows a coupon, check the expiry, minimum spend and which charge it applies to. Confirm the discount appears in the checkout total before budgeting for it. Shipping offers and item-order offers can have different conditions.'],
      ['Record a dated total', 'Write down the amount paid for the order, then store the international quote separately with the date and route. If comparing platforms, use the same item options and destination. Update the comparison if the packed dimensions change or an offer expires before payment.'],
    ],
    sources: [official, beginner, 'https://hipo-buy.com/articles/hipobuy-spreadsheet-prices-qc-shipping-guide/'],
  },
  {
    slug: 'sizes-and-variants',
    title: 'How to check HipoBuy sizes and product variants',
    summary: 'Turn seller charts and inspection measurements into a practical fit check.',
    sections: [
      ['Start with a garment you own', 'Measure a similar item that fits, using the same method shown on the seller chart. A flat chest width differs from full circumference. Compare the measurements that matter for the category, such as sleeve length and chest for jackets, or waist and inseam for trousers.'],
      ['Keep the exact option attached', 'Save the chart alongside the listing and confirm it applies to the selected style. Record the size label plus the color or version. When two options share a size label but list different measurements, choose by the chart associated with that option.'],
      ['Check the warehouse evidence', 'When inspection photos are available, compare the size tag and variant with the order. If a key measurement is still unclear, tell support where to place the tape and what you need confirmed. Resolve the discrepancy while the order remains at the warehouse.'],
    ],
    sources: [official, spreadsheet],
  },
  {
    slug: 'tracking-and-support',
    title: 'HipoBuy tracking and what to send to support',
    summary: 'Identify the stalled stage and include the reference support needs.',
    sections: [
      ['Identify the shipment stage', 'A seller-to-warehouse shipment and an international parcel are tracked separately. Check which order status you are looking at and whether the parcel has actually been submitted. If there are several items in one parcel, begin with the parcel reference and list the affected order IDs.'],
      ['Read the latest scan', 'Keep the last scan text, date and carrier or route details where displayed. Look for an action request before treating a pause as a lost parcel. Check the current timeline or follow-up window shown by the route, then decide whether to contact HipoBuy or the indicated carrier.'],
      ['Send one concrete request', 'Provide the order or parcel reference, last known status, when it changed and what answer you need. For an item issue, attach the selected option and inspection evidence. For a delivery issue, include the route and tracking reference in the official support channel.'],
    ],
    sources: [official, beginner],
  },
];

export const faqs = [
  ['What is this HipoBuy spreadsheet?', 'It is an independent catalog and guide. Product data and photos are sourced from CNFansSP.', 'hipobuy-spreadsheet'],
  ['How do I search for products?', 'Enter a short item name. Results open on CNFansSP using its search form.', 'hipobuy-spreadsheet'],
  ['Where do the product cards go?', 'Each card opens its matching CNFansSP product detail page.', 'hipobuy-spreadsheet'],
  ['What if searching an item ID returns nothing?', 'Try the item name or category. A seller item ID may not be indexed as a CNFansSP keyword.', 'hipobuy-spreadsheet'],
  ['How do I order through HipoBuy?', 'Copy the original seller link and paste it into HipoBuy, then verify the option and review the order.', 'how-to-buy'],
  ['Can I place an order on this spreadsheet?', 'Ordering and payment take place on HipoBuy. Start with the seller link from the product detail.', 'how-to-buy'],
  ['Which listing link should I paste?', 'Use the marketplace item URL that identifies the exact seller listing.', 'taobao-weidian-1688-links'],
  ['What if the seller link fails to import?', 'Open the link directly first. If the item still exists, give HipoBuy support the URL and selected option.', 'taobao-weidian-1688-links'],
  ['How do I compare 1688 options?', 'Check which option the price covers, any quantity tier and the minimum order before submitting.', 'taobao-weidian-1688-links'],
  ['Where are the warehouse checks?', 'Check the HipoBuy order after warehouse receipt. Compare the inspection with your own order details.', 'qc-photos'],
  ['Can a QC photo prove authenticity?', 'Warehouse photos can show visible details such as labels and condition. They cannot establish authenticity by themselves.', 'qc-photos'],
  ['What if the warehouse item looks wrong?', 'Save the photo and order reference, then ask HipoBuy support about the specific mismatch before dispatch.', 'qc-photos'],
  ['How do I choose a size?', 'Compare the listing chart with measurements of an item that fits you, using the same measurement method.', 'sizes-and-variants'],
  ['Are item price and shipping the same charge?', 'The item order and the international parcel quote are separate stages. Check each displayed total.', 'fees-and-coupons'],
  ['How do I check a coupon?', 'Review its expiry, minimum spend and applicable charge. Confirm the discount appears before payment.', 'fees-and-coupons'],
  ['How do I estimate international shipping?', 'Compare current routes with the same destination, parcel weight and dimensions.', 'shipping-calculator'],
  ['Why did the freight estimate change?', 'Packed dimensions, weight, route and destination can affect the final quote.', 'shipping-calculator'],
  ['What is a Rehearsal Parcel?', 'It is a pre-dispatch packing review to look for in HipoBuy. Check what it includes for your parcel.', 'rehearsal-parcel'],
  ['Can I combine orders from several sellers?', 'HipoBuy describes combining eligible stored items into parcels. Review the contents and route before submitting.', 'warehouse-consolidation'],
  ['Where can I check how long an item can stay in storage?', 'Use the current storage information in your account for that item while planning consolidation.', 'warehouse-consolidation'],
  ['Which number should I use to track a parcel?', 'Use the international parcel tracking reference for carrier tracking and keep the related order IDs for support.', 'tracking-and-support'],
  ['What should I include in a support request?', 'Include the order or parcel reference, exact issue, last status and relevant evidence.', 'tracking-and-support'],
].map(([question, answer, guide], index) => ({ id: 'q' + (index + 1), question, answer, guide }));


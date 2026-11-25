export const sources = {
  official: ['HipoBuy official shopping workflow', 'https://hipobuy.com/'],
  fees: ['HipoBuy Service & Fees', 'https://hipobuy.com/notice/1740653781924810754'],
  returns: ['HipoBuy Returns and Refunds', 'https://hipobuy.com/notice/1740656181012172801'],
  status: ['HipoBuy Order Status Display', 'https://hipobuy.com/notice/1901884786310991873'],
  customs: ['HipoBuy customs guidance', 'https://hipobuy.com/notice/1740663384020455425'],
  contact: ['HipoBuy Contact Us', 'https://hipobuy.com/notice/1901839623362531329'],
  source: ['CNFansSP catalogue', 'https://www.cnfanssp.com/AllProducts/'],
  sample: ['CNFansSP Jersey-60 product record', 'https://www.cnfanssp.com/AllProducts/6667.html'],
  qc: ['Official HipoBuy app', 'https://app.hipobuy.com/'],
  competitor: ['Repsheet HipoBuy spreadsheet', 'https://repsheet.net/spreadsheet/hipobuy'],
  links: ['Pandaback HipoBuy Weidian link guide', 'https://pandaback.cc/en/agents/hipobuy']
};

// Ordered by publication order, newest first.
export const articles = [
  ['hipobuy-shipping-estimate', 'HipoBuy Shipping Estimate: Compare Routes and Cost',
    'Build a landed-cost estimate for your destination before paying to dispatch a parcel.', ['fees','customs','official'],
    [
      ['Start with the two shipping legs', 'Record what you pay for each seller to send an item to the warehouse. Then estimate the warehouse-to-address shipment separately. Compare routes with the same destination and parcel details. A low item price can stop being competitive once both shipping legs are included.'],
      ['Make the estimates comparable', 'Enter the packed weight and dimensions when you have them. Before packing, run a low and high scenario. A large lightweight parcel may be billed differently from a dense parcel of the same scale weight, depending on the route. Check each route’s allowed contents, size limits and billing rules before comparing totals.'],
      ['Recheck before dispatch', 'When your warehouse parcel is ready, replace your guesses with the final measurements and review the displayed quote. Check the destination’s rules for possible duties, taxes and carrier fees. Keep those separate from the international shipping estimate so you can tell which amounts remain uncertain.']
    ]],
  ['hipobuy-qc-photos', 'HipoBuy QC Photos: A Warehouse Inspection Checklist',
    'Use warehouse photos to check the actual variant and spot visible problems before dispatch.', ['official','qc','competitor'],
    [
      ['Match photos to your order', 'Open the inspection record for your own order and compare it with the seller listing and your selected variant. Check labels, quantity, color, included accessories and obvious marks. Photos from earlier buyers can be useful while browsing. Your own order photos are the relevant evidence for the item in storage.'],
      ['Check the details that affect fit', 'For a garment, compare a visible tape measurement with a garment that already fits you. Use the same measurement convention, such as flat chest width. Lighting can change apparent color, and a photographed tag alone cannot establish fit, materials or authenticity.'],
      ['Escalate a discrepancy while the item is stored', 'Save the order number and relevant photo, then identify exactly what differs. Ask support what verification or return options are available before submitting the parcel. Keep a copy of the seller variant and any measurements in case the listing changes.']
    ]],
  ['how-to-order-on-hipobuy', 'How to Order on HipoBuy: Listing to Delivery',
    'Follow the purchase, warehouse and parcel steps with a check at each handoff.', ['official','fees','sample'],
    [
      ['Verify the listing before payment', 'Open HipoBuy from the seller link, then match the title, marketplace ID and variant. For example, the CNFansSP Jersey-60 listing identifies Weidian item 7632511460. Check current price and quantity in the agent page, especially if the catalogue shows an earlier seller price.'],
      ['Wait for warehouse inspection', 'The seller must ship the item to the Chinese warehouse before it can be included in a parcel. Review the inspection result after arrival and compare it with your selected option. If something differs, ask about the available remedy while the item is still at the warehouse.'],
      ['Set up the international parcel', 'Choose the stored items to send, confirm the address and review the routes available for that parcel. Compare the actual shipping quote and restrictions. Save both your purchase order reference and parcel tracking reference, since they represent different stages of the process.']
    ]],
  ['hipobuy-weidian-link-converter', 'HipoBuy Link Converter: Open Weidian, Taobao and 1688 Listings',
    'Keep the original marketplace and product identity when moving a seller link into HipoBuy.', ['official','links','sample'],
    [
      ['Use the seller link as the reference', 'Copy the marketplace link from the product detail page. Open a share link until you reach the full listing if it does not show a clear product identifier. Save that original URL alongside the name and variant you want. Listing titles can be translated or shortened by an agent.'],
      ['Check a Weidian link by item ID', 'For a Weidian listing, the itemID value should match the number in HipoBuy’s product/weidian path. CNFansSP’s Jersey-60 links to Weidian ID 7632511460. The same number appears in its HipoBuy URL. Confirm the presented seller, images and options before ordering.'],
      ['Import other marketplaces through search', 'Paste a full Taobao or 1688 listing URL into the official HipoBuy search field, then inspect the returned item. Marketplace matters because a bare number does not identify the source by itself. If an import fails, try the original long URL and review the platform’s availability message.']
    ]],
  ['hipobuy-returns-refunds', 'HipoBuy Returns and Refunds: What to Check First',
    'Identify where the item is and collect the evidence the support team needs.', ['returns','contact','official'],
    [
      ['Identify the stage of the problem', 'Start with whether the order is awaiting seller purchase, in domestic transit, in the warehouse or already sent internationally. Record the visible status and order number. Ask about the options for that stage, since sending an item overseas changes how it can be returned.'],
      ['Make the request specific', 'Describe one issue clearly, such as a size label that differs from the selected option. Attach the order variant and the relevant warehouse photo or delivery evidence. Ask about eligibility, any seller conditions, the time window and charges before accepting a return arrangement.'],
      ['Track the outcome', 'Save any support reference and the expected refund destination. Check whether the item price, domestic freight and any return charge are handled separately. Reconcile the actual credit with the approved amount and follow up with the case reference if they differ.']
    ]],
  ['hipobuy-order-status', 'HipoBuy Order Status and Parcel Tracking Explained',
    'Distinguish seller progress from international tracking and know which reference to use.', ['status','official','contact'],
    [
      ['Read the purchase order first', 'Use the purchase order to see progress between the seller and warehouse. Check the most recent timestamp and whether an action is requested. A seller shipment update belongs to the domestic journey to the warehouse.'],
      ['Use the parcel record after dispatch', 'If you combine several orders, save the parcel reference as well as the individual order references. Look for the carrier and tracking number provided for the international shipment. A tracking record can update at its own pace as carriers transfer a parcel.'],
      ['Give support the right reference', 'For a delayed item, provide its purchase order number. For an international tracking question, provide the parcel and tracking numbers, the latest scan and the destination. This directs the case to the stage where the delay appeared.']
    ]],
  ['hipobuy-spreadsheet-finds', 'HipoBuy Spreadsheet Finds: How to Verify a Listing',
    'Compare source details and identify a listing reliably before opening the agent.', ['source','sample','competitor'],
    [
      ['Start with the category or search term', 'Use a product type or seller title to narrow your options. This catalogue sends those searches to CNFansSP. Open a result to see the data the source provides, and keep the listing detail open while you compare options.'],
      ['Separate catalogue facts from checkout facts', 'Use the source title, product photo and displayed price to shortlist an item. Then confirm the seller variant, current availability, current price and domestic shipping in the agent checkout. Save the marketplace URL so another listing with a similar title cannot be mistaken for it.'],
      ['Check what an image represents', 'A listing photo helps identify the advertised variant. Historical QC photos, where available on third-party tools, show a past inspection. Use your own warehouse record when deciding whether the item received matches your order.']
    ]],
  ['hipobuy-warehouse-parcel', 'HipoBuy Warehouse and Parcel Consolidation Checklist',
    'Group items only after checking arrival, inspection results and route eligibility.', ['official','fees','customs'],
    [
      ['Reconcile what arrived', 'Make a list of the items you intend to send. Match each one to a warehouse order and review its QC result. Resolve missing quantities or visible differences before you group the items for international shipment.'],
      ['Compare one box and multiple boxes', 'A combined parcel may simplify tracking, while separate parcels may give you more options if a route restricts particular products. Compare the available routes, the packed dimensions and the total price of each option before choosing. Include packaging choices in your comparison.'],
      ['Review the final parcel', 'Check the contents and delivery address before submission. Keep the final quote and parcel reference with your purchase records. For any item you leave behind, check the storage information displayed on your account before planning a later shipment.']
    ]],
  ['hipobuy-total-cost', 'HipoBuy Costs and Payments: Budget the Whole Order',
    'Track the seller price, warehouse delivery and final parcel costs separately.', ['fees','official','customs'],
    [
      ['Track the purchase costs', 'Create a row for each item with its selected variant price and domestic freight to the warehouse. Label the currency for every amount. At payment, record the actual amount charged and any payment or conversion fee your provider displays.'],
      ['Keep a separate parcel budget', 'Add the international route quote and any optional packing or coverage selected during submission. For a mixed parcel, assign costs consistently across items if you want to compare the final spend. Route, packing and destination can change the estimate.'],
      ['Reconcile the amount paid', 'Keep your initial budget and final receipts side by side. Account for any refunds and customs or carrier charges separately. A first-order promotion or coupon should be included only after the checkout shows that it applies to your order.']
    ]],
  ['hipobuy-registration', 'HipoBuy Sign-Up, Invite Codes and Coupons',
    'Use the official registration page and verify any promotion in the account before budgeting.', ['official','fees','contact'],
    [
      ['Start from the official domain', 'Open the HipoBuy registration page from hipobuy.com. If you have an invite link, check the host and the code shown in the registration flow. Keep login and verification details on the official service.'],
      ['Read the coupon details in the account', 'Check the expiry, minimum spend, currency and what the coupon applies to. A promotion can have a different value depending on the route or order. Compare savings only after selecting the actual item or parcel and seeing the updated amount.'],
      ['Confirm attribution if it matters', 'If an inviter gave you a specific code, ask them to verify the link before registering. The registration button on this site opens HipoBuy’s public sign-up page. For questions about a missing coupon or the account, use HipoBuy’s official contact options.']
    ]]
];

export const faqs = [
  ['estimate', 'How do I estimate HipoBuy shipping?', 'Enter your destination and a realistic packed weight and size in HipoBuy’s shipping estimate. Recheck the route once the parcel is measured.', 'fees'],
  ['qc', 'Where do I check my HipoBuy QC photos?', 'Review the warehouse inspection result for your order after the seller delivers it. Compare the visible photos with the variant you selected.', 'official'],
  ['order', 'How do I place my first HipoBuy order?', 'Open or paste the seller link in HipoBuy, confirm the variant, and submit the order. Review warehouse inspection before arranging international shipment.', 'official'],
  ['agent', 'What does HipoBuy do?', 'HipoBuy acts as a shopping agent. Its workflow covers purchase, warehouse receipt, inspection and arranging delivery.', 'official'],
  ['catalogue', 'Where do the products on this site come from?', 'Product names, images, catalogue prices and detail links are read from CNFansSP.', 'source'],
  ['search', 'How can I find products by name?', 'Submit a product term in the search box, or open the relevant category. Both take you to matching pages on CNFansSP.', 'source'],
  ['sample', 'Which item matches Weidian ID 7632511460?', 'CNFansSP identifies it as Jersey-60. Open its source detail page to compare the seller link and item number.', 'sample'],
  ['weidian', 'How do I open a Weidian item on HipoBuy?', 'Paste its seller URL into HipoBuy search. Check the Weidian item ID on the imported page before choosing options.', 'links'],
  ['taobao', 'How do I import Taobao and 1688 seller links?', 'Start with the full original listing link in HipoBuy search, then verify the marketplace, title and available options.', 'official'],
  ['link-fail', 'What if the product link fails to load?', 'Check the original seller page and try its full listing URL. If it still fails, use the availability message in HipoBuy or contact support with the link.', 'contact'],
  ['variant', 'When should I confirm size and color?', 'Confirm both in HipoBuy before submitting an order. After warehouse arrival, compare the inspection photos and labels with your chosen variant.', 'official'],
  ['registration', 'Where do I register for HipoBuy?', 'Use the Sign Up link on hipobuy.com. Verify any invite code in the official registration flow.', 'official'],
  ['coupons', 'Can I rely on an advertised HipoBuy coupon?', 'Check the expiry, order eligibility and final discount shown in your account. Only include discounts applied to your checkout.', 'official'],
  ['price', 'Does the listed price include international shipping?', 'Budget for the item, domestic shipping to the warehouse and international delivery. HipoBuy lists purchase and parcel costs separately in its fee guide.', 'fees'],
  ['payment', 'Where can I check current payment options?', 'Use the available options shown in HipoBuy at checkout. Check the currency and any fees before paying.', 'official'],
  ['separate-tracking', 'Why is the seller shipment separate from parcel tracking?', 'The seller shipment ends at the warehouse. International tracking follows the outbound parcel after you submit it for dispatch.', 'status'],
  ['consolidation', 'Can I combine orders into one parcel?', 'HipoBuy lets you select stored items for a parcel. Review that route’s restrictions and final packed dimensions first.', 'official'],
  ['weight', 'Can parcel dimensions affect the delivery quote?', 'Check the route’s billing rules with the packed measurements. Size can matter even when two parcels have the same scale weight.', 'fees'],
  ['route', 'How do I choose an international route?', 'Compare the current quote, permitted contents, packed size and delivery information for the same destination.', 'official'],
  ['customs', 'Can customs charges be separate from shipping?', 'Yes. Check the destination rules and the chosen route’s terms. Customs charges depend on the shipment and destination.', 'customs'],
  ['wrong-item', 'What should I do if QC shows the wrong item?', 'Save the inspection photo, chosen option and order number. Contact support before including the item in a parcel.', 'returns'],
  ['refund', 'Where can I check whether an item is eligible for a refund?', 'Review HipoBuy’s current policy and ask support with the order’s status. Check seller eligibility and any fees or deadlines.', 'returns'],
  ['delay', 'What information helps with a delayed parcel?', 'Provide the parcel ID, carrier tracking number and last scan. For a seller-to-warehouse delay, provide the individual purchase order number.', 'status'],
  ['support', 'How can I reach HipoBuy support?', 'Use the contact options on the official HipoBuy Contact Us notice and include the order or parcel reference relevant to the issue.', 'contact']
];

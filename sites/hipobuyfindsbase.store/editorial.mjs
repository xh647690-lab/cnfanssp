const home = ['HipoBuy shopping workflow', 'https://hipobuy.com/'];
const fees = ['HipoBuy charges', 'https://hipobuy.com/notice/1740653781924810754'];
const support = ['HipoBuy customer service', 'https://hipobuy.com/notice/1901839623362531329'];
const customs = ['HipoBuy customs guidance', 'https://hipobuy.com/notice/1740663384020455425'];
const insurance = ['HipoBuy insurance and compensation', 'https://hipobuy.com/notice/1906603612122468353'];
const catalog = ['CNFansSP product catalog', 'https://www.cnfanssp.com/AllProducts/'];
const sample = ['CNFansSP example listing', 'https://www.cnfanssp.com/AllProducts/6667.html'];
const qc = ['Independent QC photo guide', 'https://hippoobuy.net/qc-photos/'];
const packing = ['Independent rehearsal parcel guide', 'https://hipobuy.tips/hipobuy-spreadsheet'];
const tracking = ['Independent tracking guide index', 'https://spreadsheets-hipobuy.com/'];
const listings = ['Independent spreadsheet guide', 'https://hipo-buy.com/articles/hipobuy-spreadsheet-prices-qc-shipping-guide/'];

export const articles = [
  ['hipobuy-spreadsheet','HipoBuy Spreadsheet: How to Find and Verify Product Links','Use the catalog to find an item, then verify the seller listing before ordering.',[
    ['Search with a short phrase','Try a category or two words from the product name. Searching for Jersey on this site opens the matching CNFansSP results. If the results are too broad, open a category first and compare listings by photo, size options and seller link.'],
    ['Match the listing before you copy it','Open the product detail page and identify its marketplace link. On the example CNFansSP page, Jersey-60 appears at /AllProducts/6667.html, while the Weidian item ID shown on the detail page is 7632511460. Use the marketplace link when HipoBuy asks for a product URL.'],
    ['Record what you intend to order','Save the marketplace link, selected variant, quantity and shown price together. Recheck the current listing whenever you revisit a saved link. If the title, photo and variant menu point to different items, ask about the exact selection before submitting the order.']
  ],[catalog,sample,home]],
  ['hipobuy-shipping-calculator','HipoBuy Shipping Calculator: Estimate the Total Order Cost','Compare the goods subtotal and the packed-parcel quote using the same destination.',[
    ['Start with the order subtotal','Record the item price and the seller’s domestic delivery charge. Keep those figures alongside the currency shown at checkout. Compare international shipping only after specifying where the parcel will go and which items will be packed together.'],
    ['Run the estimate twice','Use estimated weight while deciding what to buy. Once packed measurements are available, enter those in the quote and compare eligible lines using the same destination and units. Check whether the price includes packing, insurance and any other selected services.'],
    ['Keep a small cost worksheet','For example, a 120 CNY item, 10 CNY domestic delivery and a hypothetical 180 CNY international quote total 310 CNY before extras. Replace every example figure with your current amounts and record which charges are already included, so you avoid counting them twice.']
  ],[fees,home]],
  ['hipobuy-qc-photos','HipoBuy QC Photos: What to Inspect at the Warehouse','Check the variant, visible condition and measurements before approving a parcel.',[
    ['Confirm you are reviewing the correct item','Match the warehouse photos to the order line first. Compare quantity, colour and the size tag. For multi-piece orders verify that every ordered piece appears, or ask support to confirm what arrived.'],
    ['Inspect from wide shot to close-up','Use the full views to check overall shape and alignment. Then look at seams, closures, soles or other points specific to the item. A close-up beside a ruler can answer a fit question that a wide photograph leaves unresolved.'],
    ['Ask one specific follow-up question','Reference the order number and the image where you see a problem. For example, ask for the flat chest width in centimetres, measured from underarm to underarm. Resolve material discrepancies before dispatch. Photos show visible details and may leave performance, material composition or authenticity unverified.']
  ],[home,qc]],
  ['hipobuy-weidian-taobao-1688','How to Order Weidian, Taobao and 1688 Links on HipoBuy','Identify the original listing and check the purchase options HipoBuy imports.',[
    ['Start with the original item page','Open the marketplace product URL from the CNFansSP detail page. Copy the working product address into HipoBuy’s search. If a short link opens a share screen, follow it to the product page and confirm the item before copying.'],
    ['Check the imported options','Compare the HipoBuy menu against the original listing. Record the exact colour or model label and size. Check the quantity field and any minimum purchase quantity on the listing, especially on a wholesale listing. Ask for help if the item imports with unclear or missing options.'],
    ['Review your cart before paying','Verify the selected variant, quantity, current price and domestic delivery fee for each line. Keep a copy of the seller URL and the options you selected. That record makes it easier to identify which line needs attention if a seller changes stock or a different variant arrives.']
  ],[home,sample,['HipoBuy example order page','https://hipobuy.com/goods/details?channel=WEIDIAN&id=7797612745']]],
  ['hipobuy-size-chart','HipoBuy Size Charts: Compare Garment Measurements','Use a garment you own as the reference for chest, length and waist measurements.',[
    ['Measure a garment that already fits','Lay it flat without stretching it. Record chest width, garment length and sleeves for a top, or waist, rise and inseam for trousers. Keep the unit and the measuring points beside each number so you can repeat the comparison.'],
    ['Check how the seller measured','A flat chest width of 54 cm and a chest circumference of 108 cm may describe the same measurement. Compare figures on the same basis, and make sure you are comparing garment dimensions with garment dimensions. For a loose fit, compare against a garment with the amount of room you want.'],
    ['Use warehouse photos to resolve a close call','If two sizes are close or the chart is ambiguous, ask for the one or two measurements that matter most. Specify where to place the ruler. Check the resulting image against your reference before choosing dispatch or asking about an exchange.']
  ],[listings,qc]],
  ['hipobuy-rehearsal-parcel','HipoBuy Rehearsal Parcel: Weight, Dimensions and Packing','Use the packed measurements to check whether a shipping route still fits.',[
    ['Review the items before requesting packing','Resolve any warehouse inspection questions, then select the items you want in the parcel. Decide which original boxes or protective packaging you need to retain. If you request that packaging be removed, specify the items clearly.'],
    ['Record the packed numbers','If rehearsal is offered for your parcel, use it to record the packed weight and the outside length, width and height. Compare these against the shipping line’s limits and calculation method. A bulky lightweight box can have a higher chargeable weight on lines that use dimensional billing.'],
    ['Compare like with like','Use the same packed measurements and delivery address for each quote. Check optional services, eligible contents and the expected delivery range. Recheck the quote if the packing or items change before dispatch.']
  ],[home,packing,fees]],
  ['hipobuy-warehouse','HipoBuy Warehouse and Consolidation: When to Combine Orders','Decide what to ship together after checking inspection results and storage deadlines.',[
    ['Make a list of outstanding orders','Record each item as purchased, in domestic transit, received or ready for parcel selection based on what your account shows. Keep storage deadlines alongside received items so waiting for a slower seller remains an informed choice.'],
    ['Compare one parcel and two','Combining orders can reduce repeated packing or base charges. It can also change the largest box dimension or make a route unavailable for the combined contents. Compare actual eligible quotes and departure timing for both options if the difference matters.'],
    ['Validate the parcel selection','Compare each chosen order line with its QC result and the packing list. Leave items with open returns or exchange questions out of the parcel. Confirm the recipient details before submission and save the resulting parcel record separately from the seller order IDs.']
  ],[home,fees,packing]],
  ['hipobuy-tracking','HipoBuy Tracking: Order Status, Carrier Scans and Delivery','Use the order number or parcel number depending on where the shipment is.',[
    ['Identify the stage first','A seller order covers the item and its trip to the warehouse. An international parcel covers the selected items after dispatch. When an item is still being purchased, use its order number. Once it is in a submitted parcel, check the parcel record for the carrier and tracking number.'],
    ['Read the last event and its date','A label-created event means a shipping record exists. A carrier acceptance event records a handoff. Keep the last meaningful event and timestamp when checking a gap, and check whether HipoBuy shows a separate local tracking number for final delivery.'],
    ['Send a complete support request','Provide the parcel number, carrier tracking number, last scan and delivery destination. If the carrier marks the parcel delivered and you cannot find it, check the delivery location and request the available proof of delivery before contacting support.']
  ],[home,tracking,support]],
  ['hipobuy-returns-refunds','HipoBuy Returns and Refunds: What to Do Before Shipping','Document the issue and check seller eligibility before requesting a return.',[
    ['Check the order’s available actions','Open the warehouse order promptly when QC shows the wrong size, a missing piece or visible damage. Check the applicable seller terms and the return or exchange options HipoBuy shows for that order. Distinguish a seller return from a parcel claim after international dispatch.'],
    ['Describe the mismatch clearly','Provide the order ID, the option you selected and the warehouse photo that shows the discrepancy. If you want an exchange, specify the replacement variant. Keep the item out of a parcel while the request is pending.'],
    ['Confirm fees and where any refund goes','Ask whether domestic return postage or other charges apply, and check the expected refund destination in the order record. Keep a copy of the decision and follow up with the case reference if the balance or payment record does not match the resolution.']
  ],[home,support,insurance]],
  ['hipobuy-customs-insurance','HipoBuy Customs, Duties and Parcel Insurance','Check the selected route and insurance terms before you dispatch.',[
    ['Verify the destination and contents','Review the shipping line’s restrictions and the destination authority’s current import guidance for your goods. Record the declared contents and values accurately. A route listed for one parcel may be unavailable when destination, contents or packed dimensions change.'],
    ['Read the coverage terms with the quote','Check which events are covered, exclusions, claim deadlines and required evidence. Compare insurance against the goods involved and the coverage offered on the specific line. Keep screenshots or receipts that show the quote and selected options.'],
    ['Retain delivery evidence','Keep carrier tracking and parcel records. If there is damage or missing contents, photograph the outer box, label, internal packaging and affected items. Contact the carrier and HipoBuy promptly through their current claim channels.']
  ],[customs,insurance,support]]
];

export const faq = [
  ['getting-started','What is a HipoBuy spreadsheet?','A catalog of item leads. On this site, product records are read from CNFansSP, and the agent handles purchasing and delivery separately.',catalog],
  ['getting-started','How do I search for a product?','Enter a product name or short phrase in the search box. Results open directly on CNFansSP.',catalog],
  ['getting-started','Where is the product ID for Jersey-60?','CNFansSP identifies Jersey-60 with Weidian ID 7632511460. Open the detail page to see its marketplace link.',sample],
  ['getting-started','Where do I place a HipoBuy order?','Open HipoBuy and paste the original marketplace product URL into its shopping search.',home],
  ['getting-started','Do I need an account to browse the catalog?','Catalog pages on this preview are publicly accessible. Use your HipoBuy account when placing or managing an order.',home],
  ['getting-started','Does the language selector translate the seller listing?','It translates interface labels and category names. Product information and destination pages retain the source site’s language.',catalog],
  ['orders','How do I choose the right size?','Compare the listing measurements to a garment you own, using the same units and measurement points.',listings],
  ['orders','Can I submit a Weidian link?','Copy the original item URL from the listing and confirm the product and variant after HipoBuy imports it.',home],
  ['orders','What if the listing has a minimum quantity?','Check the quantity requirement and the subtotal before paying, especially when using wholesale listings.',home],
  ['orders','Does the catalog price include shipping?','Review the seller’s domestic charge and the international parcel quote separately in HipoBuy.',fees],
  ['orders','What if my colour or size is out of stock?','Confirm availability with the agent and approve any substitution yourself before the purchase proceeds.',support],
  ['orders','Where can I check payment methods?','Use the methods shown for your account at checkout and verify the displayed currency and total.',home],
  ['warehouse','When can I review QC photos?','Check the warehouse record after the item arrives and warehouse inspection is recorded.',home],
  ['warehouse','What should I check in QC photos?','Match quantity, colour and size, then inspect visible damage, seams and relevant measurements.',qc],
  ['warehouse','Can QC photos prove authenticity?','Photos help you assess visible details. Authenticity and performance may require other evidence.',qc],
  ['warehouse','Can I request a measurement photo?','Check the item’s available warehouse services and specify what you want measured and where.',qc],
  ['warehouse','Can I combine items from different sellers?','Select eligible stored items in HipoBuy and compare the resulting parcel quote and limits.',home],
  ['warehouse','How do I see when storage expires?','Check the deadline on each warehouse order before waiting for additional items.',home],
  ['shipping','How do I estimate international shipping?','Use your destination and expected parcel size, then refresh the quote once packed weight and dimensions are available.',fees],
  ['shipping','What is volumetric weight?','It is a billing measure based on outside box dimensions. Compare the calculation method used by your selected line.',packing],
  ['shipping','Why did my quote change after packing?','Packed size, measured weight, eligible lines or optional services can affect the final quote.',fees],
  ['shipping','What if tracking has stopped updating?','Check the last carrier event and date, then send HipoBuy the parcel reference and tracking number if you need help.',support],
  ['shipping','How do I request a return after QC?','Open the warehouse order, check eligibility, document the discrepancy and keep it out of your international parcel.',support],
  ['shipping','Where do I check parcel insurance and customs terms?','Use the current line rules and official insurance guidance, and verify import requirements for your destination.',insurance]
];

const editorialSources = {
  catalog: ['CNFansSP product catalog','https://www.cnfanssp.com/AllProducts/'],
  agents: ['CNFansSP shopping agent directory','https://www.cnfanssp.com/Agents/'],
  jersey: ['CNFansSP Jersey-60 product listing','https://www.cnfanssp.com/AllProducts/6667.html'],
  seller: ['Weidian seller listing for Jersey-60','https://weidian.com/item.html?itemID=7632511460'],
  help: ['CNFans Help Center','https://cnfans.com/help-center'],
  shipping: ['CNFans shipping calculator','https://cnfans.com/pages/warehouse/shipping-calculator'],
  maintenance: ['CNFans maintenance notice','https://cnfans.com/reset/'],
  walk: ['CNFansProduct order walkthrough','https://cnfansproduct.com/how-to-buy/'],
  competitor: ['CNFans.org buying FAQ','https://cnfans.org/faq/'],
  reference: ['Kakobuy Picklist spreadsheet','https://kakobuypicklist.com/'],
};
const guideTopics = [
  {
    slug:'cnfans-spreadsheet', title:'How to use the CNFans spreadsheet', keyword:'CNFans spreadsheet',
    summary:'Find a listing, verify the seller and keep the product link you will need at checkout.',
    sections:[
      ['Start with a narrow search','Search by a concrete item description such as “football jersey” or by the title shown on CNFansSP. If the result list is broad, start in the matching category and compare a few listings side by side. Search uses the upstream catalog, so the seller’s original wording matters more than the language chosen for this interface.'],
      ['Keep the source link with each pick','Open the CNFansSP product page and save both that page and the original marketplace link when it is present. The site’s internal listing number, the marketplace item ID and the seller’s option names answer different questions. For example, the Jersey-60 listing is under page 6667, while its linked Weidian item is 7632511460.'],
      ['Verify the variant before paying','At the seller or agent, match the photos, seller, size or color and quantity to your shortlist. Write down any unresolved differences. Check the live price and stock there, especially if you are reopening a link saved weeks ago. Saving the original link also makes it easier to ask support for help with the same listing.'],
    ], sources:['catalog','jersey','seller','reference'],
  },
  {
    slug:'weidian-link-to-cnfans', title:'How to open a Weidian link in CNFans', keyword:'Weidian link to CNFans',
    summary:'Locate the original item URL and check that the agent imports the correct listing.',
    sections:[
      ['Start at the marketplace listing','On the CNFansSP detail page, look for the original marketplace link. A Weidian item URL commonly includes an itemID parameter. Open the seller page to confirm what the ID refers to. A catalog category or screenshot is useful for discovery, while the item URL is what an agent can use to identify the listing.'],
      ['Check the imported result','If the item has a CNFans button, open it and verify the seller, item photos and options. If the button opens an error and the agent’s search is available, you can paste the original marketplace URL there and check the result. Before submitting, confirm the requested variant, size and quantity again.'],
      ['When the link still fails','Check whether the source seller page opens and whether the item is still listed. An existing seller page alone cannot establish that a particular agent accepts the item. Save the item ID and error text when contacting support. If the agent rejects the item, check its current availability and policy before making arrangements.'],
    ], sources:['jersey','seller','help','competitor'],
  },
  {
    slug:'order-with-cnfans', title:'How to order with CNFans, from listing to parcel', keyword:'how to order on CNFans',
    summary:'Follow the stages of an agent order and check which details matter at each step.',
    sections:[
      ['Before the purchase request','Save the original marketplace link and select the exact size, style and quantity in the agent’s order interface. Compare seller options and ask about any missing size or material information before paying. Save the order number and receipt once the payment has been accepted.'],
      ['When the order reaches the warehouse','Open the warehouse record for that order. Verify the item and quantity against your order, then inspect available warehouse photos. If the warehouse record shows a discrepancy, start a support request using the item and order references while the parcel is still at the warehouse.'],
      ['Before outbound shipping','Select the warehouse items you want in the parcel. Review the available routes for your destination, packed measurements, restrictions and final charges. Keep the parcel number and tracking link with the order records. Check current terms in your account since available routes, service charges and return conditions may change.'],
    ], sources:['help','shipping','walk'],
  },
  {
    slug:'cnfans-qc-photos', title:'CNFans QC photos: what to check before shipping', keyword:'CNFans QC photos',
    summary:'Inspect the actual warehouse photos and collect the evidence you need for a support request.',
    sections:[
      ['Match photos to your order','Open the warehouse entry for your order and match the selected color, size label, quantity and accessories. Compare it with the seller’s variant photos. A seller gallery shows the listing, while an inspection photo is tied to the warehouse record for the order you are reviewing.'],
      ['Look at the details likely to affect use','Check high-wear areas, seams, fasteners and obvious marks. For a jersey, review the print placement and size label if those photos are available. Color can look different under warehouse lighting. If fit matters, request a useful measurement with a clear measuring method where the service offers one.'],
      ['Record issues before packing','Save a screenshot of the relevant image and note what you expected, what you can see and which photo shows the difference. Contact support from the order record so the request is tied to the right item. Review the available return or exchange options before authorizing the outbound parcel.'],
    ], sources:['help','shipping','walk','reference'],
  },
  {
    slug:'cnfans-shipping-calculator', title:'How to use the CNFans shipping calculator', keyword:'CNFans shipping calculator',
    summary:'Compare quotes by destination, packed measurements and included services.',
    sections:[
      ['Estimate with realistic parcel inputs','Start with the destination and the best available estimate for packed weight and dimensions. Add any packaging you expect to keep. If your items have not reached the warehouse, record which inputs are still guesses so you can compare them against the actual packed measurements later.'],
      ['Compare routes using equivalent inputs','Use the same destination and parcel inputs for each quote. Write down the billed weight, tracking or coverage offered and any item restrictions. Where a route uses dimensional weight, check its current calculation in the quote. Two routes can price the same box differently.'],
      ['Read the final parcel quote','A calculator quote is an estimate. Recheck the total shown in the account when the parcel details are known. Compare any optional packing, insurance and payment charges separately. Keep a note of what the route says about taxes or import charges for your destination and verify unclear terms before choosing it.'],
    ], sources:['shipping','help','competitor'],
  },
  {
    slug:'cnfans-shipping-cost', title:'CNFans shipping costs: build a full budget', keyword:'CNFans shipping cost',
    summary:'Separate the item price from domestic delivery, warehouse options and the outbound parcel.',
    sections:[
      ['Write down the item costs first','Use the current seller or agent order price for the option you actually chose. Add any domestic delivery shown at checkout and record the checkout currency. If you are buying several items, record each line separately so a change or refund can be traced to the correct order.'],
      ['Budget for the second payment','When the goods are in the warehouse, build a separate estimate for international shipping and any packing, insurance or service add-ons you choose. Compare routes for the same measured parcel and destination. Leave yourself room for charges that are explicitly excluded from the quote.'],
      ['Compare offers after fees','Check coupon requirements, eligible routes and the amount due after the discount. Compare totals in the same currency and account for conversion or payment fees you are shown. Save the final parcel quote so you can tell which change caused a difference from your first estimate.'],
    ], sources:['shipping','help','competitor'],
  },
  {
    slug:'cnfans-size-chart', title:'How to read seller size charts on CNFans', keyword:'CNFans size chart',
    summary:'Measure a garment you already wear and match the seller’s measuring method.',
    sections:[
      ['Use a garment as your reference','Lay a garment with the fit you want flat and measure it using the method described in the seller’s chart. For tops, useful measurements often include chest width and body length. Keep flat widths and circumferences separate in your notes, and convert units consistently before comparing numbers.'],
      ['Confirm the chart applies to the variant','Some listings include different options, styles or batches under the same product link. Match the chart to the specific variant. If you are between sizes, compare the two measurements that matter most to you and ask for clarification about any label that is unclear.'],
      ['Keep the evidence for QC','Save the seller chart and your selected option with the order. When the item reaches the warehouse, compare the size label and any available measurement photo. If you request a measurement, specify where it should start and end, so the result can be compared to your original notes.'],
    ], sources:['walk','help','jersey'],
  },
  {
    slug:'cnfans-warehouse-returns', title:'CNFans warehouse returns and exchanges checklist', keyword:'CNFans warehouse returns',
    summary:'Collect the order details, QC evidence and relevant deadlines before requesting a return.',
    sections:[
      ['Start with the individual order','Use the order number, item link, variant and warehouse arrival status to identify the problem. Save the relevant inspection image and state what differs from what you ordered. If more than one item is affected, list each separately so support can act on the right order lines.'],
      ['Confirm the conditions before acting','Check the current return or exchange terms in the agent’s help center and account. Ask support to confirm whether the seller accepts the request, any deadline that applies and which charges can be refunded. Eligibility may depend on the item, seller and order stage.'],
      ['Keep the resolution with your receipt','Save the answer from support and check that the returned or exchanged items are reflected in the order record. If the parcel has already been dispatched, provide the parcel number and tracking details so support can advise on the available after-sales options for that stage.'],
    ], sources:['help','walk'],
  },
  {
    slug:'cnfans-product-link-not-working', title:'CNFans product link not working: what to check', keyword:'CNFans product link not working',
    summary:'Work out whether the issue is the seller listing, agent import or an existing order.',
    sections:[
      ['Check which link is failing','Verify that the CNFansSP detail page points to an original seller listing. Open that listing and compare the marketplace item ID with the one saved in your notes. If the seller page has moved or the listing is gone, ask for an updated link instead of relying on a similar-looking search result.'],
      ['Separate a page error from item eligibility','A seller listing can open even if the agent cannot import it. Check the agent’s current notice, the product status and any marketplace restrictions shown in the agent interface. Keep the exact error text for support and confirm whether the problem applies to this item or to the service more generally.'],
      ['Use the order record for paid items','If you already paid, check the existing order and parcel status in your account. Give support the order number and receipt. Opening a new listing or trying another shopping agent will not resolve the payment or warehouse record tied to that earlier order.'],
    ], sources:['maintenance','help','competitor','jersey'],
  },
  {
    slug:'compare-cnfans-alternatives', title:'How to compare CNFans and other shopping agents', keyword:'CNFans alternatives',
    summary:'Use one seller listing and destination to compare real costs and service terms.',
    sections:[
      ['Compare the same item first','Start from the original marketplace link and verify that each agent accepts the exact item and marketplace. Compare the same color, size and quantity. Note whether the imported listing lets you choose the required option and whether any purchasing limits apply.'],
      ['Include warehouse and shipping terms','For the same destination and estimated parcel size, compare the total after fees, available routes, QC coverage, return handling and support contact options. Review storage deadlines and the price of any extra packing you expect to request. A prominent coupon is only one part of this comparison.'],
      ['Keep existing orders separate','Use the original agent to check a paid order, warehouse stock or remaining balance. If you are considering moving goods between warehouses, ask both services whether they support it before arranging a shipment. Use the comparison to make the next decision for the same item and destination.'],
    ], sources:['agents','help','competitor'],
  },
];

const faqGroups = [
  ['Finding products',[
    ['What is the CNFans spreadsheet?','A searchable directory of seller listings. On CNFansSP you can browse categories and open each listing’s source or agent links when present.',0],
    ['Where do the product photos come from?','Product photos are loaded from CNFansSP. For warehouse photos of your order, check the order record at the buying agent.',3],
    ['How do I search on CNFansSP?','Enter a product name or a specific description in the search form. It opens the matching results on CNFansSP.',0],
    ['What if my search shows no results?','Try a shorter name or the wording used in the source listing. You can also open a relevant CNFansSP category.',0],
    ['Can I browse by category without an account?','The public CNFansSP categories can be opened from the category page in this preview.',0],
    ['Is a listing number the same as the marketplace product ID?','They can differ. For Jersey-60, the catalog detail path ends in 6667.html, while its Weidian item ID is 7632511460.',0],
  ]],
  ['Links and buying',[
    ['Where do I register?','The Create an account button opens the account form on CNFansSP. For buying through an agent, use that agent’s own account system.',2],
    ['How do I open the original seller listing?','Open the product on CNFansSP and choose the marketplace link shown there. Check the seller, item ID and selected option.',1],
    ['How do I use a Weidian link with CNFans?','Open the listing’s CNFans button if it is available, or paste the original item URL into the agent’s product search. Confirm the imported result.',1],
    ['Why is the CNFans purchase link failing?','Check if the seller page still opens and if the agent shows a service or item restriction. Save the exact error text if you need support.',8],
    ['Can I use a link with a different buying agent?','Try the original marketplace item URL and check the new agent’s item eligibility and purchase options.',9],
    ['Where do I check an existing CNFans order?','Use your CNFans account and the order or parcel number. Save the receipt and support correspondence for that order.',8],
  ]],
  ['Photos, sizing and returns',[
    ['What are QC photos?','QC photos are warehouse inspection images associated with an order. Check them against your selected size, color and quantity.',3],
    ['Are seller photos the same as warehouse QC photos?','Seller photos describe the listing. Warehouse photos show what was received for the order they are attached to.',3],
    ['How do I choose a size?','Compare the seller’s measurements with a garment you already wear, using the same measuring method and units.',6],
    ['What should I do if a QC photo shows the wrong item?','Save the photo and order number, then contact the agent from the order record before requesting outbound shipping.',3],
    ['Can I return an item from the warehouse?','Ask the agent to confirm seller acceptance, eligibility, deadlines and charges for the specific order.',7],
    ['What if the parcel has already shipped?','Contact your agent with the order number, parcel number and tracking details to check which after-sales options apply.',7],
  ]],
  ['Shipping and cost',[
    ['Does the catalog price include international shipping?','Treat the catalog price as a listing reference. Review the item checkout and the separate outbound parcel quote for the amount you will pay.',5],
    ['How do I estimate CNFans shipping?','Use the shipping calculator with your destination, expected packed weight and parcel dimensions, then check the final quote in your account.',4],
    ['What is dimensional weight?','It is a shipping weight calculated from package dimensions. Check how the selected route calculates and applies it.',4],
    ['Can I send several warehouse items in one parcel?','CNFans describes a consolidation option. Check eligibility, size limits and the resulting quote for the items in your account.',4],
    ['Do shipping coupons always reduce the final total?','Check eligible routes, expiration and minimum spend, then compare the total after optional services and payment costs.',5],
    ['How should I compare buying agents?','Use the same marketplace item and destination. Compare accepted items, total fees, shipping routes, QC coverage and returns.',9],
  ]],
];

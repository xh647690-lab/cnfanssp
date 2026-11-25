export const sources = {
  catalog: ['cnfanssp catalog', 'https://www.cnfanssp.com/AllProducts/'],
  jersey: ['cnfanssp · Jersey-60', 'https://www.cnfanssp.com/AllProducts/6667.html'],
  help: ['HipoBuy Help Center', 'https://hipobuy.com/help'],
  signup: ['HipoBuy registration', 'https://hipobuy.com/register'],
  shipping: ['HipoBuy Shipping Estimate', 'https://hipobuy.com/estimation'],
  workflow: ['HipoBuy first-order walkthrough · HipoFinds', 'https://hipofinds.com/guide/'],
  shortlist: ['Spreadsheet workflow · Hipo-Buy', 'https://hipo-buy.com/how-to-use-hipobuy-spreadsheet/'],
  options: ['Ordering and parcel guides · Hiipobuy', 'https://www.hiipobuy.com/index.html'],
  links: ['HipoBuy link examples · SSFinds', 'https://ssfinds.com/hipobuy-spreadsheet'],
  faq: ['Spreadsheet questions · Spreadsheets Hipobuy', 'https://spreadsheets-hipobuy.com/faq/'],
}

export const faqs = [
  ['What is a HipoBuy spreadsheet?', 'It is a directory of product leads. This directory reads cnfanssp listings. The source detail page gives you a place to check the listing before opening the seller link in HipoBuy.', 'catalog'],
  ['How do I find an item from this site?', 'Search with the product name or a distinctive part of it. Search opens the corresponding cnfanssp results, where you can select the original detail page.', 'catalog'],
  ['Can I search by category?', 'Choose a category such as Shoes or Jerseys to open that category on cnfanssp. Use product-specific terms once you have narrowed down the type of item.', 'catalog'],
  ['Where do the catalog images and prices come from?', 'Product images, names and displayed prices come from cnfanssp. Confirm the selected variant and current charge at checkout before paying.', 'catalog'],
  ['How can I check that two links refer to the same item?', 'Compare both the seller marketplace and its item ID. For example, the cnfanssp page for Jersey-60 identifies Weidian item 7632511460.', 'jersey'],
  ['Which marketplace links can I open in HipoBuy?', 'The walkthrough demonstrates using product links from Weidian, Taobao and 1688. Paste the original listing URL into HipoBuy and check that the seller and options load as expected.', 'workflow'],
  ['How do I register for HipoBuy?', 'Open the official registration form and follow its account prompts. Check the domain before entering your credentials.', 'signup'],
  ['Is an invitation code required?', 'The HipoBuy registration form has an optional invitation code field. Verify that any code you enter matches the offer you intend to use.', 'workflow'],
  ['Where can I check a HipoBuy coupon?', 'Check the offer terms shown in your HipoBuy account. Look for eligible charges, minimum spend and expiry before including a discount in your budget.', 'help'],
  ['What should I do if the product link fails to load?', 'Open the seller URL directly to check whether the listing is available. If the seller page still works, look for the Custom Order option or ask HipoBuy support whether the item can be handled.', 'options'],
  ['What is a Forwarding Order?', 'It is the workflow for forwarding a purchase you made yourself to the HipoBuy warehouse. Review the platform instructions for the warehouse address and shipment information before using it.', 'options'],
  ['What should I verify before choosing a size?', 'Compare the seller’s measurements for the exact variant with a garment that fits you. Save the chart so you can check the relevant dimensions again when QC arrives.', 'shortlist'],
  ['What are HipoBuy QC photos?', 'They are warehouse images used to inspect visible features of an order. Compare the photos against your selected style, color and size before submitting the parcel.', 'options'],
  ['Can I use older QC photos to approve my order?', 'Use previous photos as a reference for what to inspect. For your own parcel decision, check the QC from your specific warehouse order.', 'links'],
  ['What should I do if a QC photo is unclear?', 'Identify the exact detail that is missing, such as the size tag or a measurement. Check the inspection options or ask HipoBuy support whether another image is available.', 'help'],
  ['How do I request a return or exchange?', 'Open the item in your HipoBuy account and consult its after-sales options. Check the applicable deadline, seller eligibility and any costs as soon as you see a mismatch.', 'help'],
  ['How do I check my warehouse storage deadline?', 'Refer to the storage information for the item in your account or ask support. Check the deadline while planning to combine items from multiple sellers.', 'help'],
  ['How do I estimate HipoBuy shipping?', 'Open the official estimator, enter the destination and use the best available parcel weight and dimensions. Compare the result again when warehouse measurements are available.', 'shipping'],
  ['What is volumetric weight?', 'It converts parcel dimensions into a billing weight under a carrier’s rules. Compare the actual weight and dimensions using the rule shown for the selected route.', 'shipping'],
  ['Why did the parcel quote change after packing?', 'The final package can have different measurements from your estimate. Compare its actual dimensions, packaging options and selected route with your earlier inputs.', 'shipping'],
  ['What should I compare between shipping lines?', 'Compare total quoted cost, weight and size limits, item restrictions, tracking, and any listed coverage conditions for your destination.', 'shipping'],
  ['How do I track a HipoBuy order versus a parcel?', 'The order view follows the seller purchase and warehouse stage. Use the parcel record and its tracking number to follow an international shipment after dispatch.', 'options'],
  ['Can I group items into one parcel?', 'Review the items that have arrived and compare a combined parcel quote with separate quotes. Route restrictions and billing thresholds can affect the result.', 'options'],
  ['Where can I get help with a payment or shipment?', 'Use the official Help Center or your account’s support channel. Include the relevant order or parcel number and the date of the latest status.', 'help'],
]

export const guides = [
  ['hipobuy-spreadsheet', 'How to use a HipoBuy spreadsheet', 'Go from a catalog search to a verified seller listing and a shortlist you can review at the warehouse.', ['catalog','shortlist','workflow'], [
    ['Start with a specific search', 'Choose a product type and one requirement you can verify, such as an inseam, closure style or shoe size. Search that combination or start in the relevant cnfanssp category. Save a few candidates that meet the same requirement so you can compare them on the same basis.'],
    ['Verify the seller listing', 'Open the cnfanssp detail and follow the original marketplace link. Record the marketplace, item ID, variant and quoted price. For Jersey-60, cnfanssp shows Weidian item 7632511460. That pair of identifiers helps you recognize the item even if its title changes.'],
    ['Keep the reference until shipping', 'Save the selected variant and size chart with your order notes. When QC arrives, compare the visible details against that reference. Resolve a mismatch through the order record before you submit the parcel.'],
  ]],
  ['hipobuy-product-link', 'How to open a Weidian, Taobao or 1688 link on HipoBuy', 'Use the original seller URL and verify the imported item before choosing a variant.', ['links','workflow','help'], [
    ['Get the seller URL', 'Use the marketplace link on the catalog detail page. Open it first and confirm it resolves to a product rather than a shop front, expired redirect or search results page. For Weidian, keep the itemID intact when copying the URL.'],
    ['Check what HipoBuy imported', 'Paste the link into HipoBuy search. Compare the product photo, seller and available options with the original. If the listing groups several models under a single card, check the variant label and current price for the specific model.'],
    ['Handle a failed import', 'Try the full original marketplace URL after checking that the seller page still loads. If automatic import still fails, consult the official help or order options with the URL and exact size and color you need. Availability still depends on the seller and platform.'],
  ]],
  ['hipobuy-qc-photos', 'HipoBuy QC photos before shipping', 'A warehouse inspection checklist for apparel, shoes and accessories.', ['options','shortlist','help'], [
    ['Match the order first', 'Open the QC attached to your own order and compare its variant, color and size label with the order record. Check the number of pieces in the photos when your order includes a set. Reference photos from other orders can suggest angles to inspect.'],
    ['Inspect details that affect your decision', 'For clothing, check seams, closures and any requested measurements. For shoes, compare the pair, the size labels and the visible condition of the soles. For accessories, inspect the fastening or hardware that determines whether the item suits your use.'],
    ['Ask for a specific extra view', 'If you cannot verify something important, identify the exact missing angle or measurement. A request for a close-up of the size tag or a tape across the chest gives support a clear next step. Review after-sales options promptly if the photos show a mismatch.'],
  ]],
  ['hipobuy-shipping-calculator', 'How to use the HipoBuy shipping calculator', 'Compare shipping routes using the same destination, weight and package dimensions.', ['shipping','options'], [
    ['Enter comparable inputs', 'Use the destination and the best available packed dimensions and weight. If an item is still with the seller, label your figures as an estimate. Repeat the calculation once the warehouse provides parcel measurements.'],
    ['Read the route rules', 'Check the route’s weight tiers, limits and any volumetric weight rule. A light parcel with a bulky box can produce a different billable weight from its scale weight. Compare routes using identical parcel inputs to see what drives the price difference.'],
    ['Recheck choices after packing', 'Compare your shortlist using the final package size, eligibility, tracking and any coverage terms. If optional packaging changes the size, rerun the same quote with the new measurements before submitting.'],
  ]],
  ['hipobuy-sign-up-coupons', 'HipoBuy registration, invitation codes and coupons', 'Find the official signup page and check which discounts apply to your order.', ['signup','workflow','help'], [
    ['Open the official account form', 'Use the HipoBuy registration page. If you followed a referral link, check the invitation field before completing registration. Keep account credentials and verification codes in the official flow.'],
    ['Read the coupon terms', 'Check your account for available offers. Record the expiry, minimum spend, eligible charge and any restrictions. A discount against product cost and a discount against shipping affect different payments.'],
    ['Use the checkout total', 'Compare the amount shown before and after selecting the coupon. If a route or item fails to qualify, remove the discount from your budget and check whether the remaining price still works. Offer amounts and eligibility can change.'],
  ]],
  ['hipobuy-order-tracking', 'How to track a HipoBuy order and parcel', 'Use the correct identifier for the seller, warehouse and international shipping stages.', ['options','help'], [
    ['Follow the item order first', 'Use the order record while the item is being purchased or delivered to the warehouse. When it arrives, review the warehouse record and QC. A warehouse arrival tells you where the item is in the order workflow.'],
    ['Switch to the parcel record after dispatch', 'Once an international parcel is submitted and dispatched, use its tracking number and carrier status. Save the latest dated scan. If the carrier uses a local delivery partner, check the delivery reference shown in the tracking history.'],
    ['Prepare the details for support', 'Include the relevant order or parcel number, the latest status and its date. If two records show different information, share both with support so they can identify the stage that needs checking.'],
  ]],
  ['hipobuy-custom-order-forwarding', 'HipoBuy Custom Order vs. Forwarding Order', 'Choose the right workflow for a link that will not import or an item you already bought.', ['options','help'], [
    ['Use automatic import when the listing loads', 'Open a supported seller link in HipoBuy and verify the exact option and item price. This gives you a structured product record to review before ordering.'],
    ['Use Custom Order for a manual purchase request', 'If auto-import fails and the item is eligible, provide the original URL with the requested variant, quantity and any important seller details. Ask support about unclear requirements before paying.'],
    ['Use Forwarding Order for your own purchase', 'If you already bought from the seller, check the official instructions for sending the purchase to the warehouse. Keep the domestic tracking information and match it to the forwarding record to help identify the shipment on arrival.'],
  ]],
  ['hipobuy-returns-exchanges', 'HipoBuy returns and exchanges after QC', 'What to document when warehouse photos reveal a wrong variant or visible defect.', ['help','options'], [
    ['Record what differs', 'Compare the order record with the QC images. Identify the wrong feature and record the selected option, relevant measurement or defect. Keep the specific photo and seller listing reference together.'],
    ['Open the request during the warehouse stage', 'Use the item’s after-sales option or contact HipoBuy support. Ask which deadline and seller terms apply, whether an exchange is available and how return shipping or related charges would be handled.'],
    ['Check the outcome before submitting a parcel', 'Keep the item in the warehouse workflow while you confirm the request status. If a replacement arrives, review its own QC before deciding whether it can join the rest of your shipment.'],
  ]],
  ['hipobuy-warehouse-consolidation', 'HipoBuy warehouse storage and parcel consolidation', 'Plan around arrival dates and compare the cost of one parcel with separate shipments.', ['options','shipping','help'], [
    ['Track arrivals and review deadlines', 'List the items you are waiting for, their warehouse status, and the storage deadline shown in your account. Review QC as each item arrives so the ones that need attention do not hold up the parcel decision.'],
    ['Compare two parcel plans', 'Estimate shipping for a single combined package and for separate packages. Check packed dimensions, weight tiers and route limits for both. Items with special restrictions can affect which route can carry a combined parcel.'],
    ['Review the packed quote', 'When the warehouse has measured the parcel, compare the final quote with your plan. Check that the parcel record contains the intended items and the route suits the destination before submission.'],
  ]],
  ['hipobuy-total-cost', 'HipoBuy cost breakdown from listing to delivery', 'Budget for the selected product, warehouse options and destination-specific shipping.', ['catalog','shipping','faq'], [
    ['Record the actual variant price', 'The catalog price is a starting reference. Open the seller page and check the variant you intend to purchase. Note the price and any displayed domestic delivery charge in the same currency so you can reconcile them later.'],
    ['Estimate the international leg', 'Use the HipoBuy estimator with the destination and package measurements. Include any requested packing or inspection options that carry a charge. Use a range if you lack packed dimensions.'],
    ['Compare with the final payment screens', 'Check which charges are shown at order payment and which appear when submitting the parcel. Apply coupons only when the platform shows them as eligible. Allow for destination charges where applicable and compare the full expected amount with your budget.'],
  ]],
]

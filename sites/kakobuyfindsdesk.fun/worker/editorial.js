const editorialSources = {
  "official": [
    "KakoBuy 官方网站",
    "https://kakobuy.com/"
  ],
  "purchase": [
    "KakoBuy · Shopping agent service",
    "https://www.kakobuy.com/service/purchasing"
  ],
  "fees": [
    "KakoBuy · Cost breakdown",
    "https://www.kakobuy.com/service/help/question?cid=35&id=74"
  ],
  "estimate": [
    "KakoBuy · Shipping estimate",
    "https://kakobuy.com/tools/estimate"
  ],
  "returns": [
    "KakoBuy · Return Policy",
    "https://kakobuy.com/index/information?information_id=10"
  ],
  "register": [
    "KakoBuy · Registration",
    "https://kakobuy.com/register"
  ],
  "picklist": [
    "Kakobuy Picklist · Spreadsheet and FAQ",
    "https://kakobuypicklist.com/"
  ],
  "tools": [
    "KakoBuy Help · Independent tool index",
    "https://kakobuy.help/tools"
  ],
  "faq": [
    "KakoBuy Spreadsheet · Independent FAQ",
    "https://kakobuy-spreadsheet.com/features/faq?lang=english"
  ]
};

const guideTopics = [
  {
    "slug": "kakobuy-spreadsheet",
    "keyword": "KakoBuy spreadsheet, KakoBuy finds",
    "sources": [
      "picklist",
      "faq",
      "official"
    ],
    "title": "How to use a KakoBuy spreadsheet",
    "summary": "Find a seller listing, verify the exact variant and bring the original URL into KakoBuy.",
    "sections": [
      [
        "Build a shortlist by listing",
        "Search one product type or model at a time. Open promising cards and record their seller URL, color and size. Compare identical variants rather than the first prices on two cards. Marketplace titles and spreadsheet titles often differ, so match the listing ID and seller before adding an item."
      ],
      [
        "Transfer the original link",
        "Open the marketplace URL from the catalog detail, then paste that URL into KakoBuy. Check that the imported listing displays the same seller, item and options. If an agent-formatted link fails, the original marketplace link gives you a separate way to check whether the listing is still available."
      ],
      [
        "Check two separate prices",
        "Record the item subtotal and any domestic delivery charge. Use the official estimate tool for international shipping after choosing your destination. Keep both checks in your notes so a low catalog price does not obscure a high parcel cost."
      ]
    ]
  },
  {
    "slug": "weidian-link-to-kakobuy",
    "keyword": "Weidian link to KakoBuy, KakoBuy link converter",
    "sources": [
      "official",
      "purchase",
      "tools"
    ],
    "title": "How to open a Weidian, Taobao or 1688 link in KakoBuy",
    "summary": "Use the original marketplace URL to verify what KakoBuy will import.",
    "sections": [
      [
        "Start from the marketplace",
        "Open the seller page and copy its complete item URL. A shop homepage, image link or catalog URL cannot always identify the exact item. If a link converter is used, keep the original URL and treat the converted link as a shortcut."
      ],
      [
        "Verify the imported variant",
        "Compare the seller, photos, style code and available options with the source listing. On a 1688 listing check the minimum quantity and any price tiers. A price for multiple units does not establish the price for the one unit you intend to buy."
      ],
      [
        "Diagnose a failed import",
        "If KakoBuy cannot read a link, check whether the seller still lists the item, copy a fresh URL and retry the import once. If the result is still unavailable, send support the marketplace URL and exact error. A listing being online does not establish order eligibility."
      ]
    ]
  },
  {
    "slug": "how-to-order-on-kakobuy",
    "keyword": "how to order on KakoBuy, KakoBuy buying guide",
    "sources": [
      "register",
      "purchase",
      "fees"
    ],
    "title": "How to order on KakoBuy from listing to parcel",
    "summary": "Follow the purchase, warehouse and international shipping stages of an order.",
    "sections": [
      [
        "Submit the exact item",
        "Use the official account, import the seller URL and select size, color and quantity. Save the order reference and your selection when the purchase is submitted. Any notes about a customization should match what the seller or agent has confirmed."
      ],
      [
        "Check the warehouse stage",
        "Once KakoBuy records that the item arrived, open the order’s available inspection photos. Compare the label, count and visible condition to the selection. If anything differs, use the order’s support entry before authorizing a shipment."
      ],
      [
        "Submit international delivery separately",
        "Select available warehouse items, enter the destination, then compare the offered routes and packaging. Use the actual packed quote when reviewing the final total. Keep the parcel number as well as the purchase order number."
      ]
    ]
  },
  {
    "slug": "kakobuy-qc-photos",
    "keyword": "KakoBuy QC photos, KakoBuy warehouse inspection",
    "sources": [
      "purchase",
      "tools",
      "returns"
    ],
    "title": "KakoBuy QC photos: what to check before shipping",
    "summary": "Inspect your own warehouse photos before authorizing the parcel.",
    "sections": [
      [
        "Match photo and order",
        "Open the inspection attached to your actual order. Check item number, size tag, color and quantity against the confirmation. A seller gallery or an independent QC finder can illustrate what to look for but cannot show the unit in your parcel."
      ],
      [
        "Request a view that answers a question",
        "If fit matters, ask whether an in-frame measurement is available. For a possible flaw, describe the location and request a clear photo from an appropriate angle. Compare photos taken under similar lighting where possible."
      ],
      [
        "Record the discrepancy before sending",
        "Save the relevant images and list the differences from the ordered option. Contact KakoBuy through the order while the item is still at the warehouse. Check available return or exchange options before submitting international shipping."
      ]
    ]
  },
  {
    "slug": "kakobuy-shipping-calculator",
    "keyword": "KakoBuy shipping calculator, volumetric weight",
    "sources": [
      "estimate",
      "fees",
      "tools"
    ],
    "title": "How to use the KakoBuy shipping calculator",
    "summary": "Compare routes using the same destination, weight and parcel size.",
    "sections": [
      [
        "Start with realistic inputs",
        "Open the official estimator and enter the destination and available package details. Before packing, use a range for weight and size. Compare the results for multiple scenarios rather than relying on a single optimistic estimate."
      ],
      [
        "Check the weight billed by the line",
        "Actual weight and dimensional weight answer different questions. For bulky goods, ask which weight the route charges and what limits apply. Use that line’s method rather than assuming every carrier uses the same divisor."
      ],
      [
        "Recalculate when the package is packed",
        "Replace estimates with packed dimensions and weight when available. Recheck route restrictions, optional protection and final price before paying. Compare the same destination and packaging when deciding between quotes."
      ]
    ]
  },
  {
    "slug": "kakobuy-shipping-cost",
    "keyword": "KakoBuy shipping cost, KakoBuy fees",
    "sources": [
      "fees",
      "estimate",
      "purchase"
    ],
    "title": "KakoBuy shipping cost and fees: build a budget",
    "summary": "Add the purchase cost and parcel quote without counting any fee twice.",
    "sections": [
      [
        "Record the purchase subtotal",
        "KakoBuy’s official cost breakdown separates the product price and seller-to-warehouse delivery from international freight. Record the exact variant subtotal and domestic charge shown for the order. Use the same currency when comparing options."
      ],
      [
        "Review the parcel quote",
        "Add the international freight and applicable packaging or selected value-added services. If you plan to split orders across parcels, estimate each shipment separately. Recheck the quote when packaging affects chargeable weight."
      ],
      [
        "Leave room for a changed total",
        "Use the final amount displayed before checkout. Where relevant, check payment rates and destination charges with the appropriate provider. Record the date and route beside each estimate when comparing costs."
      ]
    ]
  },
  {
    "slug": "kakobuy-warehouse-consolidation",
    "keyword": "KakoBuy warehouse, KakoBuy parcel consolidation",
    "sources": [
      "purchase",
      "estimate",
      "tools"
    ],
    "title": "KakoBuy warehouse and parcel consolidation checklist",
    "summary": "Decide which in-stock warehouse orders can travel together.",
    "sections": [
      [
        "Group items by shipping needs",
        "Check order arrival and inspection status. Group items suitable for the same line and destination. Keep any item with an unresolved QC or return issue out of the proposed shipment until support has responded."
      ],
      [
        "Compare packed parcel options",
        "Check the packaging and weight information available for each plan. Combining several purchases can reduce the number of shipments, while a larger box can change dimensional weight or route eligibility. Compare the actual quotes for both plans."
      ],
      [
        "Confirm the item list before paying",
        "Review the parcel item count, address and chosen route. Save the parcel reference after submitting. Check deadlines and available storage options in the current KakoBuy warehouse view if you are waiting for more items to arrive."
      ]
    ]
  },
  {
    "slug": "kakobuy-rehearsal-shipping",
    "keyword": "KakoBuy rehearsal shipping, parcel packing estimate",
    "sources": [
      "estimate",
      "fees",
      "tools"
    ],
    "title": "KakoBuy rehearsal shipping and packing estimates",
    "summary": "Use the packing information offered on your order to compare parcel plans.",
    "sections": [
      [
        "Check what is available in the parcel form",
        "If KakoBuy offers a rehearsal or advance packing option for your parcel, read what is measured and whether it costs extra. Services can differ by order and destination. The estimator is useful before a packed measurement is available."
      ],
      [
        "Compare bundles and packaging",
        "Keep the destination and item list fixed while comparing packaging choices. Retaining a seller box may protect an item or add bulk. Use the resulting weight and dimensions to see whether that change affects available lines."
      ],
      [
        "Review the final parcel",
        "Compare the packed quote with the current estimator result, then verify the delivery address and protection options. An advance quote does not establish the final amount until the parcel is submitted and charged."
      ]
    ]
  },
  {
    "slug": "kakobuy-returns-and-exchanges",
    "keyword": "KakoBuy return policy, KakoBuy refunds and exchanges",
    "sources": [
      "returns",
      "purchase"
    ],
    "title": "KakoBuy returns and exchanges before international dispatch",
    "summary": "Prepare the order details and verify the current policy for the item.",
    "sections": [
      [
        "Check the applicable terms",
        "Read the current KakoBuy Return Policy and the seller’s conditions. Identify whether the item is awaiting purchase, delivered to the warehouse or already dispatched. The available options can depend on the item, seller and order stage."
      ],
      [
        "Provide a specific request",
        "Send the order reference, original listing, selected variant and the photos showing what arrived. State whether you want a return or exchange and ask support to confirm any deadline or domestic return cost before approving it."
      ],
      [
        "Verify the outcome before another order",
        "Look for the confirmed resolution in the order record and check whether the return, replacement or refund has actually progressed. Save any agreed conditions. If the parcel already left the warehouse, contact the platform before sending anything back."
      ]
    ]
  },
  {
    "slug": "kakobuy-parcel-tracking",
    "keyword": "KakoBuy tracking, KakoBuy parcel status",
    "sources": [
      "official",
      "purchase",
      "tools"
    ],
    "title": "KakoBuy parcel tracking and order status",
    "summary": "Find the right reference for seller delivery or international tracking.",
    "sections": [
      [
        "Separate the purchase from the parcel",
        "Use the purchase order to check whether the seller sent the item to the warehouse. After international dispatch, use the parcel reference and carrier tracking number. Recording both helps support locate the stage that needs attention."
      ],
      [
        "Read the last scan with its date",
        "Check the carrier shown on the parcel and the latest event date. A label, a handover and a delivery event describe different stages. If the route provides different tracking numbers after transfer, keep the number used by the current carrier."
      ],
      [
        "Give support a compact record",
        "If the event does not match what you expect, save the last scan, its time, the parcel ID and the destination country. Use KakoBuy’s order or parcel support entry to ask what should happen next."
      ]
    ]
  }
];

const faqGroups = [
  [
    "Finding and ordering",
    [
      [
        "What is a KakoBuy spreadsheet?",
        "A discovery directory for seller links. Review the original listing and open it in KakoBuy before ordering.",
        0
      ],
      [
        "How do I paste a Weidian link into KakoBuy?",
        "Copy the full seller item URL, paste it into KakoBuy and confirm the imported item and variant.",
        1
      ],
      [
        "Where is the official KakoBuy shipping calculator?",
        "Open KakoBuy → Shipping Estimate. Enter your destination, weight and package dimensions when available.",
        4
      ],
      [
        "Where can I create a KakoBuy account?",
        "Go to kakobuy.com/register. A catalog login and a KakoBuy order account are separate.",
        2
      ],
      [
        "What do I need for my first KakoBuy order?",
        "Keep the seller link, selected size or color, quantity and order reference. Verify the displayed amount before submitting.",
        2
      ],
      [
        "Why can the KakoBuy price differ from a spreadsheet?",
        "Check selected variant, quantity and domestic delivery. A spreadsheet may show a starting price.",
        5
      ]
    ]
  ],
  [
    "Marketplace links and QC",
    [
      [
        "Can I import a Taobao listing?",
        "Use the original Taobao item page and check that KakoBuy shows the correct item and option.",
        1
      ],
      [
        "Where do I check 1688 minimum order quantity?",
        "Read the selected offer on 1688 and confirm the quantity KakoBuy can order. Compare the same quantity in both views.",
        1
      ],
      [
        "What if KakoBuy cannot read my link?",
        "Check the original seller page and try its current full item URL. If it still fails, give support the URL and exact message.",
        1
      ],
      [
        "Which page is best for checking the exact variant?",
        "Start from the seller page and then compare the imported option in KakoBuy. Save any size chart or style code you used.",
        0
      ],
      [
        "What are KakoBuy QC photos?",
        "They are available inspection images associated with a warehouse order. Check that the order and actual variant match.",
        3
      ],
      [
        "Are listing pictures the same as KakoBuy QC photos?",
        "Listing pictures show what the seller advertises. QC photos attached to your order show the item received for that order.",
        3
      ]
    ]
  ],
  [
    "Pricing and warehouse",
    [
      [
        "What if I need a size measurement in QC?",
        "Ask support whether a photo with a measuring tape is available for the dimension you need.",
        3
      ],
      [
        "Does KakoBuy always charge actual weight?",
        "Check the selected line’s terms. Parcel dimensions and chargeable weight rules can affect the quote.",
        4
      ],
      [
        "What is domestic freight on a KakoBuy order?",
        "It is the seller-to-warehouse delivery charge. International parcel shipping is calculated separately.",
        5
      ],
      [
        "Does the shipping estimate include every fee?",
        "Check the checkout breakdown for freight, packaging and any selected services. The estimate helps compare options.",
        5
      ],
      [
        "Can I send several KakoBuy orders in one parcel?",
        "Check eligible warehouse orders and route restrictions in parcel submission. Compare the packed quote for combining versus splitting.",
        6
      ],
      [
        "Where do I check KakoBuy warehouse storage time?",
        "Check the warehouse view and the current terms for your items. Use the dates shown on the actual order.",
        6
      ]
    ]
  ],
  [
    "Packing, returns and tracking",
    [
      [
        "Where do I check KakoBuy rehearsal shipping?",
        "Open the package submission options and check whether your order offers advance packing or measurement and what it costs.",
        7
      ],
      [
        "Does removing a seller box always lower shipping cost?",
        "Compare the packed measurements and route quotes. Retaining a box can also affect protection, so verify the available options.",
        7
      ],
      [
        "How do I request a KakoBuy return?",
        "Use the order’s support entry and provide the seller link, order reference and relevant QC photos. Verify seller terms and costs.",
        8
      ],
      [
        "When will a KakoBuy refund arrive?",
        "Check the order-specific refund status and applicable terms. Timing can depend on the seller, order stage and payment method.",
        8
      ],
      [
        "Where do I track a KakoBuy parcel?",
        "Use the parcel’s assigned carrier and tracking number after dispatch. Keep the purchase reference for warehouse-stage questions.",
        9
      ],
      [
        "What should I send to KakoBuy support about a parcel?",
        "Share the parcel reference, last carrier scan and date, destination country and what you want support to check.",
        9
      ]
    ]
  ]
];

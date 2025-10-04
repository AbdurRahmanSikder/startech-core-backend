startech-core-backend/
├── .husky/
├── docs/
├── node_modules/
├── public/
├── scripts/
│
├── src/
│ ├── configs/
│ │ ├── database.config.ts # DB1 connection
│ │ ├── stripe.config.ts
│ │ ├── cloudinary.config.ts
│ │ ├── jwt.config.ts
│ │ └── index.ts
│ │
│ ├── constants/
│ │ ├── roles.constant.ts # BUYER, SELLER only
│ │ ├── orderStatus.constant.ts
│ │ ├── paymentStatus.constant.ts
│ │ ├── sellerStatus.constant.ts
│ │ └── index.ts
│ │
│ ├── controllers/
│ │ ├── auth/
│ │ │ ├── buyer.auth.controller.ts
│ │ │ └── seller.auth.controller.ts
│ │ │
│ │ ├── buyer/
│ │ │ ├── product.controller.ts # Browse products
│ │ │ ├── cart.controller.ts
│ │ │ ├── order.controller.ts
│ │ │ ├── profile.controller.ts
│ │ │ ├── address.controller.ts
│ │ │ ├── review.controller.ts
│ │ │ ├── wishlist.controller.ts
│ │ │ └── payment.controller.ts
│ │ │
│ │ ├── seller/
│ │ │ ├── dashboard.controller.ts
│ │ │ ├── product.controller.ts # Manage products
│ │ │ ├── inventory.controller.ts
│ │ │ ├── order.controller.ts # Seller orders
│ │ │ ├── payout.controller.ts
│ │ │ ├── analytics.controller.ts
│ │ │ └── settings.controller.ts
│ │ │
│ │ └── common/
│ │ ├── category.controller.ts # Public categories
│ │ └── search.controller.ts # Product search
│ │
│ ├── database/
│ │ ├── connection.ts # DB1 connection
│ │ └── seeder.ts
│ │
│ ├── events/
│ │ ├── user.events.ts
│ │ ├── order.events.ts
│ │ ├── payment.events.ts
│ │ └── seller.events.ts
│ │
│ ├── exceptions/
│ │ ├── HttpException.ts
│ │ ├── BadRequestException.ts
│ │ ├── UnauthorizedException.ts
│ │ └── NotFoundException.ts
│ │
│ ├── helpers/
│ │ ├── asyncHandler.ts
│ │ ├── apiResponse.ts
│ │ ├── apiError.ts
│ │ ├── pagination.ts
│ │ └── roleChecker.ts
│ │
│ ├── jobs/
│ │ ├── email.job.ts
│ │ ├── order.job.ts
│ │ ├── payment.job.ts
│ │ └── payout.job.ts
│ │
│ ├── middleware/
│ │ ├── auth.middleware.ts
│ │ ├── buyerRole.middleware.ts
│ │ ├── sellerRole.middleware.ts
│ │ ├── validate.middleware.ts
│ │ ├── ownerCheck.middleware.ts
│ │ └── rateLimiter.middleware.ts
│ │
│ ├── models/ # DB1 MODELS (Buyer + Seller Data)
│ │ ├── User.model.ts # Buyers & Sellers only
│ │ ├── Seller.model.ts # Extended seller info
│ │ ├── Product.model.ts # All products
│ │ ├── Category.model.ts # Product categories
│ │ ├── Cart.model.ts # Shopping carts
│ │ ├── CartItem.model.ts
│ │ ├── Order.model.ts # Customer orders
│ │ ├── OrderItem.model.ts
│ │ ├── Payment.model.ts # Payments
│ │ ├── Refund.model.ts # Refunds
│ │ ├── Address.model.ts # Shipping addresses
│ │ ├── Review.model.ts # Product reviews
│ │ ├── Wishlist.model.ts # User wishlists
│ │ ├── Coupon.model.ts # Discount coupons
│ │ ├── SellerPayout.model.ts # Seller payouts
│ │ └── index.ts
│ │
│ ├── routes/
│ │ ├── index.ts
│ │ ├── auth.routes.ts # Buyer & Seller auth
│ │ │
│ │ ├── buyer/
│ │ │ ├── product.routes.ts
│ │ │ ├── cart.routes.ts
│ │ │ ├── order.routes.ts
│ │ │ ├── profile.routes.ts
│ │ │ ├── review.routes.ts
│ │ │ ├── wishlist.routes.ts
│ │ │ └── payment.routes.ts
│ │ │
│ │ ├── seller/
│ │ │ ├── dashboard.routes.ts
│ │ │ ├── product.routes.ts
│ │ │ ├── inventory.routes.ts
│ │ │ ├── order.routes.ts
│ │ │ ├── payout.routes.ts
│ │ │ └── analytics.routes.ts
│ │ │
│ │ └── common/
│ │ ├── category.routes.ts
│ │ └── search.routes.ts
│ │
│ ├── services/
│ │ ├── auth/
│ │ │ ├── buyer.auth.service.ts
│ │ │ └── seller.auth.service.ts
│ │ │
│ │ ├── buyer/
│ │ │ ├── profile.service.ts
│ │ │ ├── cart.service.ts
│ │ │ ├── order.service.ts
│ │ │ ├── review.service.ts
│ │ │ ├── wishlist.service.ts
│ │ │ └── payment.service.ts
│ │ │
│ │ ├── seller/
│ │ │ ├── seller.service.ts
│ │ │ ├── product.service.ts
│ │ │ ├── inventory.service.ts
│ │ │ ├── order.service.ts
│ │ │ ├── payout.service.ts
│ │ │ ├── analytics.service.ts
│ │ │ └── verification.service.ts
│ │ │
│ │ └── common/
│ │ ├── product.service.ts
│ │ ├── category.service.ts
│ │ ├── checkout.service.ts
│ │ ├── stripe.service.ts
│ │ └── email.service.ts
│ │
│ ├── sockets/
│ │ ├── index.ts
│ │ ├── order.socket.ts
│ │ └── notification.socket.ts
│ │
│ ├── types/
│ │ ├── express.d.ts
│ │ ├── user.types.ts
│ │ ├── buyer.types.ts
│ │ ├── seller.types.ts
│ │ ├── product.types.ts
│ │ ├── order.types.ts
│ │ └── index.ts
│ │
│ ├── utils/
│ │ ├── jwt.util.ts
│ │ ├── bcrypt.util.ts
│ │ ├── logger.util.ts
│ │ ├── calculation.util.ts
│ │ └── upload.util.ts
│ │
│ ├── validations/
│ │ ├── auth.validation.ts
│ │ ├── product.validation.ts
│ │ ├── order.validation.ts
│ │ ├── seller.validation.ts
│ │ └── review.validation.ts
│ │
│ ├── views/
│ │ ├── orderConfirmation.pug
│ │ ├── emailVerification.pug
│ │ └── payoutNotification.pug
│ │
│ └── server.ts
│
├── tests/
├── .env
├── .env.example
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├── package.json
├── readme.md
└── tsconfig.json

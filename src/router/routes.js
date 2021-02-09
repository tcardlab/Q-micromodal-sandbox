import Product from '../components/Product.vue'
import ProductDetails from '../components/ProductDetails'
import ProductDimensions from '../components/ProductDimensions'
import Shipping from '../components/Shipping'
import Cart from '../components/Cart'
import ShippingCalculator from '../components/ShippingCalculator'
import Footer from '../components/Footer'

const routes = [
  {
    path: '/',
    components: {
      footer: Footer
    },
    meta: { layout: 'MyLayout' }
    // component: () => import('layouts/MyLayout.vue'),
    /* children: [
      { path: '', component: () => import('pages/Index.vue') }
    ] */
  },
  {
    path: '/product/:productId',
    component: Product,
    props: true,
    children: [
      {
        name: 'details',
        path: 'details',
        component: ProductDetails
      },
      {
        name: 'dimensions',
        path: 'dimensions',
        component: ProductDimensions
      }
    ]
  },
  {
    path: '/shipping',
    component: Shipping
  },
  {
    path: '/cart',
    components: {
      modal: Cart
    },
    children: [
      {
        name: 'calculator',
        path: 'calculator',
        component: ShippingCalculator
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

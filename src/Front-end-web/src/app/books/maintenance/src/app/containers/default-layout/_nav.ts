import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  
  // {
    
  //   name: 'ERP DashBoard',
  //   url: '/ErpDashBoard',
  //   class:'test',
  // },
  {
    
    name: 'Acc DashBoard',
    url: '/admin/dashboard',
    class:'test',
  },
  {
    name: 'BASE SETUP',
    url: '/admin/setup',
    class:'setupNav',
    iconComponent: { name: 'cil-list' },
    children: [
      {
        name: 'Setup Heads',
        url: '/admin/setup/add-heads',
        class:'chalidNav'
      },
      {
        name: 'COA',
        url: '/admin/setup/coa',
      },
      {
        name: 'Note Setup',
        url: '/admin/setup/note-entry',
      },
      // {
      //   name: 'Purchase Order',
      //   url: '/admin/setup/purchase-order',
      // },
      {
        name: 'Fiscal Year Setup',
        url: '/admin/setup/fiscal-year',
      },
    ]
  },
  {
    name: 'Accounting Voucher',
    url: '/admin/entry',
    class:'setupNav',
    iconComponent: { name: 'cil-list' },
    children: [
      {
        name: 'Receipt Voucher',
        url: '/admin/entry/receipt-entry',
       
      },
      {
        name: 'Payment Voucher',
        url: '/admin/entry/payment-voucher',
       
      },
      {
        name: 'Journal Voucher',
        url: '/admin/entry/journal-entry',
      },
      {
        name: 'Contra Voucher',
        url: '/admin/entry/contra-entry',
      },
      // {
      //   name: 'Purchase Voucher',
      //   url: '/admin/entry/purchase-voucher',
      // },
      {
        name: 'Purchase Voucher',
        url: '/admin/entry/purchase-master',
      },
      // {
      //   name: 'Sales Voucher',
      //   url: '/admin/entry/sales-voucher',
      // },
      {
          name: 'Sales Voucher',
          url: '/admin/entry/sales-voucher-master',
        },
      // {
      //   name: 'Ledger Requests',
      //   url: '/admin/entry/ledger-requests',
      // },
      {
        name: 'Day Book',
        url: '/admin/entry/day-book',
      },
      {
        name: 'Voucher List',
        
        children: [
          // {
          //   name: 'Ledger',
          //   url: '/admin/entry/ledger-voucher',
          // },
          // {
          //   name: 'Sub Ledger',
          //   url: '/admin/entry/subLedger-voucher',
          // },
          // {
          //   name: 'Ledgers List',
          //   url: '/admin/entry/ledger-subLedger-voucher',
          // },
          {
            name: 'Note Voucher List',
            url: '/admin/entry/note-voucher',
          },
          {
            name: 'Download & Print Voucher',
            url: '/admin/entry/download-voucher',
          },
        ]
      },
    ]
  },
  
  {
    name: 'Report',
    url: '/admin/report',
    class:'setupNav',
    iconComponent: { name: 'cil-list' },
    children: [
      {
        name: 'Statement of Financial Position',
        url: '/admin/report/balance-sheet',
      },
      {
        name: 'Ledger Lists',
        url: '/admin/report/ledger-sub-ledger-voucher-report',
      },
      // {
      //   name: 'Ledger List ',
      //   url: '/admin/report/ledger-sub-ledger-voucher-report2',
      // },
      // {
      //   name: 'Day Book',
      //   url: '/admin/report/all-ledgers',
      // },
      {
        name: 'Trial Balance ',
        url: '/admin/report/trial-balance',
      },
      // {
      //   name: 'Trial Balance Old',
      //   url: '/admin/report/trial-balance-all',
      // },
      {
        name: 'Statement of Profit or Loss',
        url: '/admin/report/profit-loss',
      },
      {
        name: 'Receipt & Payment Statement',
        url: '/admin/report/receipt-payment',
      },
      // {
      //   name: 'BS Note',
      //   url: '/admin/report/note-balance-sheet',
      // },
      // {
      //   name: 'PL Note',
      //   url: '/admin/report/note-profit-loss',
      // },
      {
        name: 'Statement of Cash Flow',
        url: '/admin/report/cash-flow',
      },
      {
        name: 'Bank Book',
        url: '/admin/report/bank-book',
      },
      {
        name: 'Cash Book',
        url: '/admin/report/cash-book',
      },
      {
        name: 'Bank Book Datewise',
        url: '/admin/report/bank-book-datewise',
      },
      {
        name: 'Cash Book Datewise',
        url: '/admin/report/cash-book-datewise',
      },
      {
        name: 'Party Details',
        url: '/admin/report/party-list',
      },
      // {
      //   name: 'Vendor List',
      //   url: '/admin/report/vendor-list',
      // },
      // {
      //   name: 'Customer List',
      //   url: '/admin/report/customer-list',
      // },
      // daily-cash-bank
      {
        name: 'Daily Bank & Cash Balance',
        url: '/admin/report/daily-cash-bank',
      },
      {
        name: 'Inventory',
        url: '/admin/report/item-list', 
      },
      {
        name: 'Inventory  Details',
        url: '/admin/report/inventory-items', 
      },
      {
        name: 'Inventory Items Details()',
        url: '/admin/report/item-details-list', 
      },
     
      {
        name: 'Inventory Profit',
        url: '/admin/report/product-wise-profit', 
      },
      // dealer-list
      {
        name: 'Dealer List',
        url: '/admin/report/dealer-list', 
      },
    ]
  },

  
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/admin/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/admin/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  // {
  //   name: 'Components',
  //   title: true
  // },
  // {
  //   name: 'Base',
  //   url: '/admin/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/admin/base/accordion'
  //     },
  //     {
  //       name: 'Breadcrumbs',
  //       url: '/admin/base/breadcrumbs'
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/admin/base/cards'
  //     },
  //     {
  //       name: 'Carousel',
  //       url: '/admin/base/carousel'
  //     },
  //     {
  //       name: 'Collapse',
  //       url: '/admin/base/collapse'
  //     },
  //     {
  //       name: 'List Group',
  //       url: '/admin/base/list-group'
  //     },
  //     {
  //       name: 'Navs & Tabs',
  //       url: '/admin/base/navs'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/admin/base/pagination'
  //     },
  //     {
  //       name: 'Placeholder',
  //       url: '/admin/base/placeholder'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/admin/base/popovers'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/admin/base/progress'
  //     },
  //     {
  //       name: 'Spinners',
  //       url: '/admin/base/spinners'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/admin/base/tables'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/admin/base/tabs'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/admin/base/tooltips'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/admin/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/admin/buttons/buttons'
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/admin/buttons/button-groups'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/admin/buttons/dropdowns'
  //     },
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/admin/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/admin/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/admin/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/admin/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/admin/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/admin/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/admin/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/admin/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/admin/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/admin/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/admin/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/admin/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/admin/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/admin/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/admin/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/admin/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/admin/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/admin/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/admin/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/admin/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];

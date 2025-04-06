export const plans: {name:string,monthly_price?:number,year_price?:number,description:string,features:string[],buttonText:string,buttonLink:string,recommended:boolean,customPlan?: boolean}[] = [
    {
      name: 'Standard',
      monthly_price:99,
      year_price: 990,
      recommended: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      features: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',

      ],
      buttonText: 'Choose Plan',
      buttonLink: '#'
    },
    {
      name: 'Premium',
      monthly_price:  299,
      year_price: 2990,
      recommended: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      features: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum'

      ],
      buttonText: 'Choose Plan',
      buttonLink: '#'
    },
    {
      name: 'Enterprise',
      customPlan: true,
      recommended: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      features: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',

      ],
      buttonText: 'Contact Us',
      buttonLink: '#'
    }
  ];
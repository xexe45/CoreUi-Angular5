export const navigation = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'fa fa-dashboard',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        name: 'Usuarios',
        url: '/users',
        icon: 'fa fa-users'
    },
    {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
            {
                name: 'Buttons',
                url: '/buttons/buttons',
                icon: 'icon-cursor'
            },
            {
                name: 'Dropdowns',
                url: '/buttons/dropdowns',
                icon: 'icon-cursor'
            },
            {
                name: 'Social Buttons',
                url: '/buttons/social-buttons',
                icon: 'icon-cursor'
            }
        ]
    },
];

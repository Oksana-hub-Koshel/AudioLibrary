import { Icon } from "@iconify/react";

export default {
    main: [
        {
            title: 'Home',
            route: '/',
            defaultIcon: <Icon icon="fluent:home-16-regular" />,
            activeIcon: <Icon icon="fluent:home-16-filled" />,
        },
        {
            title: 'Search',
            route: '/search',
            defaultIcon: <Icon icon="fluent:search-16-regular" />,
            activeIcon: <Icon icon="fluent:search-16-filled" />,
        },
        {
            title: 'Artists',
            route: '/artists',
            defaultIcon: <Icon icon="fluent:people-16-regular" />,
            activeIcon: <Icon icon="fluent:people-16-filled" />,
        },
        {
            title: 'Labels',
            route: '/labels',
            defaultIcon: <Icon icon="fluent:bookmark-16-regular" />,
            activeIcon: <Icon icon="fluent:bookmark-16-filled" />,
        },
        {
            title: 'Rating',
            route: '/rating',
            defaultIcon: <Icon icon="fluent:star-16-regular" />,
            activeIcon: <Icon icon="fluent:star-16-filled" />,
        },
    ],
    other: [

        {
            title: 'Forum',
            route: '/forum',
            defaultIcon: <Icon icon="fluent:cloud-16-regular" />,
            activeIcon: <Icon icon="fluent:cloud-16-filled" />,
        },
        {
            title: 'Geolocation',
            route: '/geolocation',
            defaultIcon: <Icon icon="fluent:earth-16-regular"    />,
            activeIcon: <Icon icon="fluent:earth-16-filled" />,
        },
        {
            title: 'Offer a track',
            route: '/offer-track',
            defaultIcon: <Icon icon="fluent:music-note-2-16-regular" />,
            activeIcon: <Icon icon="fluent:music-note-2-16-filled" />,
        },
    ]
}
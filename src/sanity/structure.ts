import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from "@sanity/orderable-document-list";

export const structure: StructureResolver = (S, context) => {
    return S.list()
        .title('Content')
        .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'skill', S, context}),

            // Optional configuration
            // orderableDocumentListDeskItem({
            //     type: 'skills',
            //     title: 'skills',
            //     // icon: Paint,
            //     // Required if using multiple lists of the same 'type'
            //     id: 'orderable-en-skills',
            //     // See notes on adding a `filter` below
            //     filter: `__i18n_lang == $lang`,
            //     params: {
            //         lang: 'en_US',
            //     },
            //     createIntent: false, // do not add an option for item creation
            //     menuItems: [], // allow an array of `S.menuItem()` to be injected to orderable document list menu
            //     // pass from the structure callback params above
            //     S,
            //     context,
            // }),

            // ... all other desk items
        ])
}

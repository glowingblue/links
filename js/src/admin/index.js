import app from 'flarum/app';

import Link from '../common/models/Link';
import addLinksPane from './addLinksPane';

export * from './components';
export * from '../common/utils';
export * from '../common/models';

app.initializers.add('fof-links', () => {
    app.store.models.links = Link;
    addLinksPane();
});

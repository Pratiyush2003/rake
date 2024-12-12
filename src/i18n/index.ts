import { addResource, LocaleKey, useTranslation } from '@/lib/i18n';

import en from './en';
import ru from './ru';
import es from './es';
import hi from './hi';
import vi from './vi';
import ja from './ja';
import ko from './ko';
import pt from './pt';
import fi from './fi';
import fr from './fr';
import id from './id';
import nl from './nl';
import pl from './pl';
import tr from './tr';
import zh from './zh';

addResource(LocaleKey.en, en);
addResource(LocaleKey.ru, ru);
addResource(LocaleKey.zh, zh);
addResource(LocaleKey.es, es);
addResource(LocaleKey.hi, hi);
addResource(LocaleKey.vi, vi);
addResource(LocaleKey.ja, ja);
addResource(LocaleKey.ko, ko);
addResource(LocaleKey.pt, pt);
addResource(LocaleKey.fi, fi);
addResource(LocaleKey.fr, fr);
addResource(LocaleKey.id, id);
addResource(LocaleKey.nl, nl);
addResource(LocaleKey.pl, pl);
addResource(LocaleKey.tr, tr);

export { useTranslation };

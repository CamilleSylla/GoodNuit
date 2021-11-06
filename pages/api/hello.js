// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Commerce from '@chec/commerce.js'

let commerce = null

export default function getCommerce(commercePublicKey) {
  console.log("running");
    if (commerce) {
        return commerce
    } else {
        const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;
        const devEnvironnement = process.env.NODE_ENV === 'development';

        if (devEnvironnement && !publicKey) {
            throw Error ('Commerce public API key not found');
        }
        commerce = new Commerce(publicKey, devEnvironnement);
        return commerce
    }
}

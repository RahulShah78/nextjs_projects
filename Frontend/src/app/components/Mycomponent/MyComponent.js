

import Link from 'next/link';

export function MyComponent() {
    return (
        <div>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
            <Link href="/products/[id]" as="/products/1">
                <a>Product 1</a>
            </Link>
        </div>
    );
}
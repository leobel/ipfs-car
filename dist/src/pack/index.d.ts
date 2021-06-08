import { ImportCandidateStream } from 'ipfs-core-types/src/utils';
import { Blockstore } from '../blockstore';
export declare function pack({ input, blockstore: userBlockstore }: {
    input: ImportCandidateStream;
    blockstore?: Blockstore;
}): Promise<{
    root: import("multiformats").CID;
    out: AsyncIterable<Uint8Array>;
}>;
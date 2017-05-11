export type TabType = 'video lessons' |
    'tabs' |
    'chords' |
    'bass tabs' |
    'guitar pro tabs' |
    'power tabs' |
    'drum tabs' |
    'ukulele chords';

export interface Tab {
    artist: string;
    name: string;
    type: TabType;
    rating: number | null; 
    numberRates: number | null;
    contentText: string;
    contentHTML: string;
}

export interface TabSearchResult {
    artist: string;
    name: string;
    rating: number | null;
    numberRates: number | null;
    type: TabType;
}

export interface TabsSearchQuery {
    bandName: string;
    songName: string;
}
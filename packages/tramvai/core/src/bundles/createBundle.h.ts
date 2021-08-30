import type { Action } from '../types/action';

export interface BundleOptions {
  presets?: BundlePreset[];
  name: string;
  components: {
    [key: string]: any;
  };
  reducers?: any[];
  actions?: Action[];
}
export type BundlePreset = Partial<BundleOptions>;

export interface Bundle {
  name: string;
  components: BundleOptions['components'];
  actions?: BundleOptions['actions'];
  reducers?: BundleOptions['reducers'];
}

export type BundleImport = () => Promise<{ default: Bundle }>;

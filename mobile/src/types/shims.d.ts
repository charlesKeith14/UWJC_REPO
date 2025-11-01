// Temporary shims so TS can resolve modules before dependencies are installed
// Remove once node_modules are installed (npm/yarn/pnpm install)
declare module "react" {
  const React: any;
  export default React;
  export const useState: any;
  export const useEffect: any;
  export const Fragment: any;
}

declare module "react-native" {
  export const View: any;
  export const Text: any;
  export const Image: any;
  export const StyleSheet: any;
  export const FlatList: any;
  export const Pressable: any;
}



declare module "smooth-scrollbar" {
  export interface ScrollbarOptions {
    damping?: number;
    alwaysShowTracks?: boolean;
    renderByPixels?: boolean;
    continuousScrolling?: boolean;
  }

  export interface ScrollbarInstance {
    destroy(): void;
    addListener(callback: (status: any) => void): void;
    scrollTo(x: number, y: number, duration?: number): void;
    getSize(): {
      container: { width: number; height: number };
      content: { width: number; height: number };
    };
    getScrollOffset(): { x: number; y: number };
    setPosition(x: number, y: number): void;
  }

  const Scrollbar: {
    init(element: HTMLElement, options?: ScrollbarOptions): ScrollbarInstance;
    get(element: HTMLElement): ScrollbarInstance | null;
  };

  export default Scrollbar;
}

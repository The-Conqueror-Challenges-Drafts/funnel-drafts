/* eslint-disable @typescript-eslint/no-explicit-any */
// Dynamic content loading function
const loadContentFile = async (filename: string): Promise<any> => {
    try {
      // Use dynamic import for content files
      const contentModule = await import(`./content/${filename}`);
      return contentModule.default || contentModule;
    } catch (error) {
      console.error(`Failed to load ${filename}:`, error);
      throw error; // Let page.tsx handle fallback
    }
  };
  
  // Dynamic layout loading function
  const loadLayoutFile = async (filename: string): Promise<any> => {
    try {
      // Use dynamic import for layout files
      const layoutModule = await import(`./layout/${filename}`);
      return layoutModule.default || layoutModule;
    } catch (error) {
      console.error(`Failed to load ${filename}:`, error);
      throw error; // Let page.tsx handle fallback
    }
  };
  
  // Cache for loaded content and layout
  const contentCache: Record<string, any> = {};
  const layoutCache: Record<string, any> = {};
  
  // Function to get content based on URL parameter
  export const getContentForParameter = async (param?: string): Promise<any> => {
    const filename = param ? `${param}.json` : 'c1.json';
    
    // Check cache first
    if (contentCache[filename]) {
      return contentCache[filename];
    }
    
    // Load content dynamically
    const content = await loadContentFile(filename);
    contentCache[filename] = content;
    return content;
  };
  
  // Function to get layout based on URL parameter
  export const getLayoutForParameter = async (param?: string): Promise<any> => {
    const filename = param ? `${param}.json` : 'l1.json';
    
    // Check cache first
    if (layoutCache[filename]) {
      return layoutCache[filename];
    }
    
    // Load layout dynamically
    const layout = await loadLayoutFile(filename);
    layoutCache[filename] = layout;
    return layout;
  };
  
  // Main function to get page data
  export const getPageData = async (searchParams: { [key: string]: string | string[] | undefined }) => {
    const params = await searchParams;
    
    // Get content and layout configs
    const contentParam = Object.keys(params).find(key => key.startsWith('c') && /^c\d+$/.test(key));
    const layoutParam = Object.keys(params).find(key => key.startsWith('l') && /^l\d+$/.test(key));
    
    const contentConfig = contentParam 
      ? await getContentForParameter(contentParam).catch(() => null)
      : null;
      
    const layoutConfig = layoutParam 
      ? await getLayoutForParameter(layoutParam).catch(() => null)
      : null;
  
    return { contentConfig, layoutConfig };
  };
  

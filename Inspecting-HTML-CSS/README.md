# Inspecting HTML and CSS
---

## Inspect element 
adalah fitur browser yang bisa melihat elemen tersembunyi pada suatu website. Elemen tersebut tentu tidak bisa dilihat secara langsung karena terdiri dari kumpulan kode HTML (Hypertext Markup Language) dan CSS (Cascading Style Sheet). Keduanya merupakan bahasa yang membentuk tampilan sebuah website.


1. Keyboard Shortcuts

The video highlights an easy way to remember the shortcuts using the letters C, J, and I:

• C for CSS (Elements Panel): Use Command + Option + C (Mac) or Ctrl + Shift + C (Windows/Linux) to jump straight to the Elements panel. This automatically puts DevTools into inspect mode, where you can hover over elements to see their attributes and styles.
• J for JavaScript (Console): Use Command + Option + J (Mac) or Ctrl + Shift + J (Windows/Linux) to open the Console directly to run code or view logs.
• I for "My Choice" (Last Panel): Use Command + Option + I (Mac) or Ctrl + Shift + I (Windows/Linux) to reopen the last panel you used. This is useful for quickly refreshing logs, such as in the Network panel.
• F12: The classic way to open DevTools, though it may require pressing the FN key on some keyboards.

2. User Interface (UI) Methods

If you prefer using your mouse, you can use these options:

• Three-Dot Menu: Click the three dots in the top right of Chrome, select More Tools, and then Developer Tools.
• Context Menu: Right-click on any specific element on a webpage and select Inspect to see its styles and attributes.
• Mac Menu Bar: On Mac OS, you can go to the top menu bar, select View, then Developer, which also lists the shortcuts for convenience.

3. Advanced Automation

For users who want DevTools to open automatically on every tab, you can use a command line flag:

• In your terminal, launch Chrome with the flag --auto-open-devtools-for-tabs.
• Note: You must quit Chrome entirely before running this command for it to work.
For complete documentation and further tips on customizing your workflow, the video suggests visiting google.gle/devtools-open
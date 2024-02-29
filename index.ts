import { Dom } from './dom';

export interface CopyTextProps {
  /** 复制内容 */
  content: string;
}

export const copyText = ({ content }: CopyTextProps) => {
  const copyNode = Dom.create('textarea');
  const body = Dom.query('body');

  copyNode.style.cssText = 'position:absolute;opacity: 0;';
  body.appendChild(copyNode);
  copyNode.value = content;
  copyNode.select();
  document.execCommand('Copy');
  body.removeChild(copyNode);

  return true;
};

function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop))
    throw typeError('getAttr 함수에 전달된 두번째 인수는 문자 타입이어야 합니다.');

  return node.getAttribute(prop);
}

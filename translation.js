function replaceHtmlText($element, textToReplace, newText) {
  if (newText) {
    $element.html(function () {
      return $element.html().replace(textToReplace, newText);
    });
  }
}

function replaceText($element, newText) {
  if (newText) {
    $element.text(newText);
  }
}

function replaceTextAndTooltip($element, newText, newTooltip) {
  if (newText) {
    $element.text(newText);
  }

  if (newTooltip) {
    $element.attr('data-tippy-content', newTooltip);
  }
}

function replaceNavigationLink($element, newLink) {
  $element.each(function () {
    if ($(this).attr('id') !== 'site-title') {
      $(this).attr('href', newLink);
    }
  });
}

$(function () {
  const pathname = window.location.pathname;
  const pathSplits = pathname.split('/').filter(Boolean);
  var code = pathSplits.length === 0 ? 'en' : pathSplits[0];
  const supportedLanugages = ['cn', 'ja', 'en', 'vn', 'pt-br', 'pt-pt', 'es', 'ko'];
  if (!supportedLanugages.includes(code)) {
    return;
  }

  var dict = {};
  if (code === 'cn') {
    dict = {
      contactUs: '聯繫我們',
      publicMetrics: '公共指標',
      ticker: '代碼',
      poolId: '權益池 ID',
      ends: '結束於',
      endsDay: ' 天',
      endsHour: ' 小時',
      endsMinute: ' 分鐘',
      currencySymbol: '¥',
      pricePair: 'ADA-CNY',
      awards: '獎項',
      howToBuy: '如何購買',
      howToStake: '如何質押',
      howToStakeTip:
        '用於質押的 ADA 永遠不會離開委託人的錢包，委託人以類似於儲蓄賬戶利息的方式獲得獎勵。委託人可以在質押後自由移動他們的 ADA，甚至可以選擇完全取消質押。',
      news: 'Cardano 新聞',
      signUp: '註冊',
      subscribe: '註冊以接收更新消息',
      phone: '電話',
      name: '姓名',
      firstName: '名',
      lastName: '姓',
      email: '電子郵件',
      emailAddress: '電子郵件地址',
      emailSubject: '標題',
      emailBody: '內容',
      countryCodeDescription: '電話號碼包括國家代碼',
      supporter: 'ADApools 最高等級支持者',
      poolDescription:
        '我們的權益池是新的，需要您的幫助才能更大的發展。我們承諾永遠不會錯過任何一個區塊。通過零利潤、多層安全性、24/7 全天候監控、高性能節點和地理冗餘連接來最大化您的回報。',
      epoch: '時代',
      epochTip: 'Cardano 平臺將時間分成稱為時代的時期。一個時代大約持續 5 天。',
      price: '價格',
      priceTip: 'Cardano 中國人民幣價格',
      relays: '傳達節點',
      relaysTip:
        '傳達節點充當核心網絡節點和互聯網之間的代理，圍繞著核心節點建立安全邊界。傳達節點確保核心節點和區塊鏈的完整性的完整，即使一個或多個傳達節點受到損害。',
      pledge: '池主應諾質押量',
      pledgeTip: '權益池池主應諾的質押量。',
      totalStake: '池現有質押量',
      totalStakeTip: '實時所有委託人總質押量。',
      delegators: '委託人數',
      delegatorsTip: '委託給權益池的錢包數量。',
      margin: '可變費用',
      marginTip: '在固定費用後，權益池主獲得的總獎勵的百分比。',
      fixedCost: '固定費用',
      fixedCostTip:
        '池的固定費用取自於每個時代的獎勵。該費用由池的所有委託人共享，而不是每個委託人。最小值為 340 ADA。',
      lifetimeROA: '總平均收益率',
      lifetimeROATip:
        'ADA 的估計回報，根據終身質押獎勵按年計算。池主獎勵不包括在計算中。',
      epochBlocks: '時代區塊量',
      epochBlocksTip: '這時代鑄造區塊的數量。',
      lifetimeBlocks: '总區塊量',
      lifetimeBlocksTip: '终身鑄造區塊的數量。',
      lifetimeLuck: '權益池总运气',
      lifetimeLuckTip:
        '衡量已產生的區塊數量與權益池預期產生的數量。從長遠來看，運氣平均為 100%。',
      buyOn: '可購買的平臺: ',
      stakeOn: '可質押的平臺: ',
      submit: '提交',
      contactUsDescription:
        '如果您有任何問題或意見，請通過電子郵件或電話與我們聯繫，或使用聯繫表給我們發送消息。',
      formSubmission: '謝謝您！已發送了確認電子郵件。',
      coinQuora: 'https://coinquora.com/zh-hans/?s=cardano',
      cointelegraph: 'https://cointelegraphcn.com/search?query=Cardano',
      etoro: 'https://www.etoro.com/zh-tw/',
      kraken: 'https://www.kraken.com/zh-cn/',
    };
  } else if (code === 'ja') {
    dict = {
      contactUs: 'お問い合わせ',
      publicMetrics: '公開指標',
      ticker: 'ティッカー',
      poolId: 'プールID',
      ends: 'で終わる',
      endsDay: '日',
      endsHour: '時間',
      endsMinute: '分',
      currencySymbol: '¥',
      pricePair: 'ADA-JPY',
      awards: '表彰',
      howToBuy: '購入する方法',
      howToStake: 'ステークける方法',
      howToStakeTip:
        '誓約に使用されるADAは、クライアントの財布から離れることはなく、クライアントは普通預金口座の利息と同様の方法で報酬を受け取ります。校長は、誓約後にADAを自由に移動できます。また、誓約を完全にキャンセルすることもできます。',
      news: 'Cardanoニュース',
      signUp: 'サインアップ',
      subscribe: 'サインアップして更新メッセージを受信する',
      phone: '電話',
      name: '名前',
      firstName: 'ファーストネーム',
      lastName: '苗字',
      email: 'Eメール',
      emailAddress: '電子メールアドレス',
      emailSubject: '題名',
      emailBody: 'メールメッセージ',
      countryCodeDescription: '電話番号には国コードが含まれています',
      supporter: 'ADApools レベル3サポーター',
      poolDescription:
        '私たちのエクイティプールは新しく、さらに発展させるためにあなたの助けが必要です。ブロックを見逃さないことをお約束します。ゼロ利益、多層セキュリティ、24時間年中無休の監視、高性能ノード、地理的に冗長な接続で収益を最大化します。',
      epoch: 'エポック',
      epochTip:
        'Cardanoネットワークは、時間をエポックと呼ばれる期間に分割します。1つのエポックは約5日間続きます。',
      price: '価格',
      priceTip: 'Cardano日本円価格',
      relays: 'リレーノード',
      relaysTip:
        '通信ノードは、コアネットワークノードとインターネット間のエージェントとして機能し、コアノードの周囲にセキュリティ境界を確立します。通信ノードは、1つ以上の通信ノードが危険にさらされた場合でも、コアノードとブロックチェーンの整合性を保証します。',
      pledge: '誓約',
      pledgeTip: 'エクイティプールの所有者が約束した質権額。',
      totalStake: '最新ステーク',
      totalStakeTip: 'リアルタイムで委任されている合計金額。',
      delegators: '委任者',
      delegatorsTip: 'プールに委任するウォレットの数。',
      margin: '委任手数料',
      marginTip:
        '固定費の後にステークプールオペレーターが取ったプールの総報酬のパーセンテージ。',
      fixedCost: '固定手数料',
      fixedCostTip:
        'プールの固定費は、エポックごとにプールの報酬から取得されます。この料金は、委任者ごとではなく、プールのすべての委任者の間で共有されます。最小値は340ADAです。',
      lifetimeROA: '総ROS',
      lifetimeROATip:
        'ADAの推定収益率は、生涯の誓約報酬に基づいて毎年計算されます。プールマスターの報酬は計算に含まれていません。',
      epochBlocks: 'エポックブロック',
      epochBlocksTip: '実際のエポックでのミントブロックの数。',
      lifetimeBlocks: '総ブロック数',
      lifetimeBlocksTip: 'ライフタイムミントブロックの数。',
      lifetimeLuck: '総運',
      lifetimeLuckTip:
        '生成されたブロックの数と予想されるエクイティプールの数を測定します。長期的には、運は平均100％です。',
      buyOn: 'あなたはそれを買うことができます： ',
      stakeOn: 'あなたは委任することができます： ',
      submit: '申し出る',
      contactUsDescription:
        'ご質問やご意見がございましたら、メールまたは電話でお問い合わせいただくか、お問い合わせフォームからメッセージをお送りください。',
      formSubmission:
        'どうもありがとうございます！確認メールが送信されました。',
      cointelegraph: 'https://jp.cointelegraph.com/search?query=Cardano',
      daedalus: 'https://daedaluswallet.io/ja/',
      kraken: 'https://www.kraken.com/ja-jp/',
    };
  } else if (code === 'en') {
    dict = {
      contactUs: 'Contact Us',
      contactUs2: 'Contact us',
      pricePair: 'ADA-USD',
      ticker: 'Ticker',
      poolId: 'Pool ID',
      submit: 'Submit',
      signUp: 'Sign Up',
      contactUsDescription:
        'If you have any questions or comments, please contact us via email or phone, or send us a message using the contact form.',
      relaysTip:
        'Relays act as proxies between the core network nodes and the internet, establishing a security perimeter around the core, block-producing network nodes. Relays ensure that the integrity of the core nodes and the blockchain remains intact, even if one or more relays become compromised.',
      howToStakeTip:
        "The ADA used for staking never leaves the delegator's wallet, and delegators earn rewards in a way that is similar to interest in a savings account. Delegators can move their ADA freely after it has been staked or even unstake it completely if they choose.",
      ends: 'Ends in',
      endsDay: 'd',
      endsHour: 'h',
      endsMinute: 'm',
      currencySymbol: '$',
      price: 'Price',
      priceTip: 'Cardano USD price',
      epoch: 'Epoch',
      epochTip:
        'Cardano network splits time into periods called epochs. One epoch lasts approximately 5 days.',
      poolDescription:
        "Our pool is new and needs your help to grow. We're committed to never missing a block. Maximize your rewards with zero margin, multi-layered security, 24/7 monitoring, high-performance nodes, and geo-redundant connections.",
      pledge: 'Pledge',
      pledgeTip:
        'The amount that the stake pool owner commits to delegate to the pool.',
      totalStake: 'Total Stake',
      totalStakeTip: 'The total amount being delegated in real-time.',
      delegators: 'Delegators',
      delegatorsTip: 'The number of wallets delegating to the pool.',
      margin: 'Margin',
      marginTip:
        "A percentage of the pool's total rewards taken by the stake pool operator after the fixed cost.",
      fixedCost: 'Fixed Cost',
      fixedCostTip:
        'Fixed cost of the pool is taken from the pool rewards every epoch. This fee is shared among all delegators of the pool, not per delegator. Minimum value is 340 ADA.',
      lifetimeROA: 'Lifetime ROA',
      lifetimeROATip:
        'Estimated Return of ADA, annualized based on lifetime staking rewards. Owner/leader rewards are excluded from calculation.',
      epochBlocks: 'Epoch Blocks',
      epochBlocksTip: 'The number of minted blocks in actual epoch.',
      lifetimeBlocks: 'Lifetime Blocks',
      lifetimeBlocksTip: 'The number of minted blocks lifetime.',
      lifetimeLuck: 'Lifetime Luck',
      lifetimeLuckTip:
        'A measure of how many blocks that have been produce vs the amount that the pool is expected to produce. In the long run, the luck averages out to 100%.',
      formSubmission: 'Thank you！A confirmation email has been sent to you.',
    };
  } else if (code === 'vn') {
    dict = {
      contactUs: 'Liên hệ chúng tôi',
      publicMetrics: 'Chỉ số công khai',
      awards: 'GIẢI THƯỞNG',
      news: 'Tin tức về Cardano',
      subscribe: 'Đăng ký để nhận thông tin cập nhật về hồ bơi',
      phone: 'Điện thoại',
      name: 'Tên',
      firstName: 'Tên đầu tiên',
      lastName: 'Họ',
      email: 'E-mail',
      emailAddress: 'Địa chỉ email',
      emailSubject: 'Chủ thể',
      emailBody: 'Thông điệp',
      countryCodeDescription: 'Số điện thoại bao gồm mã quốc gia',
      howToBuy: 'LAM THÊ NAO ĐỂ MUA',
      buyOn: 'Bạn có thể mua trên: ',
      howToStake: 'CÁCH DÙNG',
      stakeOn: 'Bạn có thể đặt cược thông qua: ',
      ticker: 'Người đánh dấu',
      poolId: 'ID nhóm',
      submit: 'Nộp',
      signUp: 'Đăng ký',
      contactUsDescription:
        'Nếu bạn có bất kỳ câu hỏi hoặc nhận xét nào, vui lòng liên hệ với chúng tôi qua email hoặc điện thoại, hoặc gửi tin nhắn cho chúng tôi bằng cách sử dụng biểu mẫu liên hệ.',
      relays: 'Nút chuyển tiếp',
      ends: 'Kết thúc ở',
      price: 'Giá bán',
      epoch: 'Kỷ nguyên',
      epochTip:
        'Mạng Cardano chia thời gian thành các khoảng thời gian được gọi là kỷ nguyên. Một kỷ nguyên kéo dài khoảng 5 ngày.',
      pledge: 'Lời hứa',
      pledgeTip:
        'Số tiền mà chủ sở hữu nhóm cổ phần cam kết ủy quyền cho nhóm.',
      totalStake: 'Tổng số cổ phần',
      totalStakeTip: 'Tổng số tiền được ủy quyền trong thời gian thực.',
      delegators: 'Người ủy quyền',
      delegatorsTip: 'Số lượng ví ủy quyền cho nhóm.',
      margin: 'Lề',
      marginTip:
        'Một tỷ lệ phần trăm trong tổng số phần thưởng của nhóm mà người điều hành nhóm cổ phần nhận được sau chi phí cố định.',
      fixedCost: 'Chi phí cố định',
      fixedCostTip:
        'Chi phí cố định của nhóm được lấy từ phần thưởng của nhóm mỗi kỷ nguyên. Phí này được chia cho tất cả những người ủy quyền của nhóm, không phải cho mỗi người được ủy quyền. Giá trị nhỏ nhất là 340 ADA.',
      lifetimeROA: 'ROA trọn đời',
      lifetimeROATip:
        'Lợi tức ước tính của ADA, hàng năm dựa trên phần thưởng đặt cược trọn đời. Phần thưởng của chủ sở hữu / người lãnh đạo được loại trừ khỏi tính toán.',
      epochBlocks: 'Số block của kỷ nguyên',
      epochBlocksTip: 'Số lượng khối đúc trong kỷ nguyên thực tế.',
      lifetimeBlocks: 'Các khối trọn đời',
      lifetimeBlocksTip: 'Số lượng các khối đúc trong thời gian tồn tại.',
      lifetimeLuck: 'May mắn trọn đời',
      lifetimeLuckTip:
        'Một thước đo về số lượng khối đã được sản xuất so với số lượng mà nhóm dự kiến ​​sẽ sản xuất. Về lâu dài, độ may mắn trung bình lên đến 100%.',
      supporter: 'ADApools Hỗ trợ cấp 3',
      relaysTip:
        'Các nút chuyển tiếp hoạt động như proxy giữa các nút mạng lõi và internet, thiết lập một vành đai bảo mật xung quanh các nút mạng lõi, tạo khối. Các rơle đảm bảo rằng tính toàn vẹn của các nút lõi và chuỗi khối vẫn còn nguyên vẹn, ngay cả khi một hoặc nhiều rơle bị xâm phạm.',
      howToStakeTip:
        'ADA được sử dụng để đặt cược không bao giờ rời khỏi ví của người được ủy quyền và người được ủy quyền kiếm được phần thưởng theo cách tương tự như lãi suất trong tài khoản tiết kiệm. Người đại diện có thể di chuyển ADA của họ một cách tự do sau khi nó đã được đặt cọc hoặc thậm chí hủy bỏ hoàn toàn nếu họ chọn.',
      poolDescription:
        'Hồ bơi của chúng tôi là mới và cần sự giúp đỡ của bạn để phát triển. Chúng tôi cam kết không bao giờ bỏ sót khối nào. Tối đa hóa phần thưởng của bạn mà không cần ký quỹ, bảo mật nhiều lớp, giám sát 24/7, các nút hiệu suất cao và kết nối địa lý dự phòng.',
      priceTip: 'Cardano giá đồng',
      endsDay: ' ngày',
      endsHour: ' giờ',
      endsMinute: ' phút',
      currencySymbol: '₫',
      pricePair: 'ADA-VND',
      etoro: 'https://www.etoro.com/vi-vn/',
      kraken: 'https://www.kraken.com/vi-vn/',
      formSubmission: 'Cảm ơn bạn！ Một email xác nhận đã được gửi cho bạn.',
    };
  } else if (code === 'pt-br') {
    dict = {
      contactUs: 'Entre em contato conosco',
      publicMetrics: 'Métricas Públicas',
      awards: 'PRÊMIOS',
      news: 'Cardano Notícia',
      subscribe: 'Inscreva-se para receber atualizações do pool',
      phone: 'Telefone',
      name: 'Nome',
      firstName: 'Primeiro nome',
      lastName: 'Último nome',
      email: 'O email',
      emailAddress: 'Endereço de e-mail',
      emailSubject: 'Sujeito',
      emailBody: 'Mensagem',
      countryCodeDescription: 'Número de telefone incluindo código do país',
      howToBuy: 'COMO COMPRAR',
      buyOn: 'Você pode comprar em: ',
      howToStake: 'COMO PARTICIPAR',
      stakeOn: 'Você pode apostar através de: ',
      ticker: 'Símbolo de ação',
      poolId: 'ID da piscina',
      submit: 'Enviar',
      signUp: 'Inscrever-se',
      contactUsDescription:
        'Se você tiver dúvidas ou comentários, entre em contato conosco por e-mail ou telefone, ou envie-nos uma mensagem através do formulário de contato.',
      relays: 'RELÉS',
      ends: 'Termina em',
      price: 'Preço',
      priceTip: 'Preço Cardano em USD',
      epoch: 'Época',
      epochTip:
        'A rede Cardano divide o tempo em períodos chamados épocas. Uma época dura aproximadamente 5 dias.',
      pledge: 'Compromisso',
      pledgeTip:
        'A quantia que o proprietário do pool de apostas se compromete a delegar ao pool.',
      totalStake: 'Aposta Total',
      totalStakeTip: 'O valor total sendo delegado em tempo real.',
      delegators: 'Delegadores',
      delegatorsTip: 'O número de carteiras delegadas ao pool.',
      margin: 'Margem',
      marginTip:
        'Uma porcentagem das recompensas totais do pool obtidas pelo operador do pool da aposta após o custo fixo.',
      fixedCost: 'Custo fixo',
      fixedCostTip:
        'O custo fixo do pool é retirado das recompensas do pool a cada época. Esta taxa é compartilhada entre todos os delegados do pool, não por delegante. O valor mínimo é 340 ADA.',
      lifetimeROA: 'ROA vitalício',
      lifetimeROATip:
        'Retorno estimado de ADA, anualizado com base em recompensas de staking vitalícias. As recompensas do proprietário / líder são excluídas do cálculo.',
      epochBlocks: 'Blocos de época',
      epochBlocksTip: 'O número de blocos cunhados na época real.',
      lifetimeBlocks: 'Blocos de vida',
      lifetimeBlocksTip: 'O número de blocos cunhados durante a vida.',
      lifetimeLuck: 'Sorte para toda a vida',
      lifetimeLuckTip:
        'Uma medida de quantos blocos foram produzidos versus a quantidade que se espera que a piscina produza. No longo prazo, a sorte atinge em média 100%.',
      supporter: 'ADApools Nível 3 Apoiante',
      relaysTip:
        'Os nós de retransmissão atuam como proxies entre os nós da rede central e a Internet, estabelecendo um perímetro de segurança em torno dos nós da rede que produzem blocos. Os relés garantem que a integridade dos nós centrais e do blockchain permaneça intacta, mesmo se um ou mais relés forem comprometidos.',
      howToStakeTip:
        'O ADA usado para piquetar nunca sai da carteira do delegante, e os delegados ganham recompensas de uma forma semelhante aos juros de uma conta poupança. Os delegados podem mover seu ADA livremente após ele ter sido piquetado ou até mesmo retirá-lo completamente, se desejarem.',
      poolDescription:
        'Nossa piscina é nova e precisa da sua ajuda para crescer. Temos o compromisso de nunca perder um bloco. Maximize suas recompensas com margem zero, segurança em várias camadas, monitoramento 24 horas por dia, 7 dias por semana, nós de alto desempenho e conexões georredundantes.',
      formSubmission:
        'Obrigado! Um email de confirmação foi enviado para você.',
      priceTip: 'Cardano Euro price',
      endsDay: 'dias',
      endsHour: 'horas',
      endsMinute: 'minutos',
      currencySymbol: '€',
      pricePair: 'ADA-EUR',
      cointelegraph: 'https://cointelegraph.com.br/search?query=Cardano',
      kraken: 'https://www.kraken.com/pt-br/',
      coinbase: 'hhttps://www.coinbase.com/pt',
    };
  } else if (code === 'es') {
    dict = {
      contactUs: 'Contáctenos',
      publicMetrics: 'Métricas públicas',
      awards: 'Premios',
      news: 'Noticias Cardano',
      subscribe: 'Regístrese para recibir actualizaciones de la piscina',
      phone: 'Teléfono',
      name: 'Nombre',
      firstName: 'Primer nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      emailAddress: 'Dirección de correo electrónico',
      emailSubject: 'Tema',
      emailBody: 'Mensaje',
      countryCodeDescription: 'Número de teléfono con código de país',
      howToBuy: 'CÓMO COMPRAR',
      buyOn: 'Puedes comprar en: ',
      submit: 'Enviar',
      signUp: 'Inscribirse',
      contactUsDescription:
        'Si tiene alguna pregunta o comentario, comuníquese con nosotros por correo electrónico o por teléfono, o envíenos un mensaje mediante el formulario de contacto.',
      relays: 'Relés',
      ends: 'Termina en',
      price: 'Precio',
      priceTip: 'Precio Cardano USD',
      howToStake: 'CÓMO APUESTAR',
      stakeOn: 'Puede apostar a través de: ',
      ticker: 'Corazón',
      poolId: 'ID de grupo',
      epoch: 'Época',
      epochTip:
        'La red Cardano divide el tiempo en períodos llamados épocas. Una época dura aproximadamente 5 días.',
      pledge: 'Promesa',
      pledgeTip:
        'La cantidad que el propietario del grupo de participación se compromete a delegar en el grupo.',
      totalStake: 'Apuesta total',
      totalStakeTip: 'La cantidad total que se delega en tiempo real.',
      delegators: 'Delegadores',
      delegatorsTip: 'La cantidad de billeteras que se delegan en el grupo.',
      margin: 'Margen',
      marginTip:
        'Un porcentaje de las recompensas totales del grupo que recibe el operador del grupo de participación después del costo fijo.',
      fixedCost: 'Costo fijo',
      fixedCostTip:
        'El costo fijo del grupo se toma de las recompensas del grupo en cada época. Esta tarifa se comparte entre todos los delegadores del grupo, no por delegador. Mínimo',
      lifetimeROA: 'ROA de por vida',
      lifetimeROATip:
        'Retorno estimado de ADA, anualizado basado en recompensas de por vida. Las recompensas de propietario / líder están excluidas del cálculo.',
      epochBlocks: 'Bloques de época',
      epochBlocksTip: 'El número de bloques acuñados en la época real.',
      lifetimeBlocks: 'Bloques de por vida',
      lifetimeBlocksTip: 'El número de bloques acuñados de por vida.',
      lifetimeLuck: 'Suerte de por vida',
      lifetimeLuckTip:
        'Una medida de cuántos bloques se han producido frente a la cantidad que se espera que produzca la agrupación. A la larga, la suerte promedia',
      supporter: 'ADApools Partidaria de nivel 3',
      formSubmission:
        '¡Gracias! Se le ha enviado un correo electrónico de confirmación.',
      relaysTip:
        'Los nodos de retransmisión actúan como servidores proxy entre los nodos de la red central e Internet, estableciendo un perímetro de seguridad alrededor de los nodos de red centrales que producen bloques. Los relés aseguran que la integridad de los nodos centrales y la cadena de bloques permanezca intacta, incluso si uno o más relés se ven comprometidos.',
      howToStakeTip:
        'La ADA utilizada para apostar nunca sale de la billetera del delegador, y los delegadores obtienen recompensas de una manera similar a los intereses en una cuenta de ahorros. Los delegadores pueden mover su ADA libremente después de que se haya apostado o incluso deshacerlo por completo si así lo desean.',
      poolDescription:
        'Nuestra piscina es nueva y necesita tu ayuda para crecer. Estamos comprometidos a no perder nunca un bloque. Maximice sus recompensas con margen cero, seguridad multicapa, supervisión 24 horas al día, 7 días a la semana, nodos de alto rendimiento y conexiones con redundancia geográfica.',
      priceTip: 'Cardano Euro price',
      endsDay: 'dias',
      endsHour: 'horas',
      endsMinute: 'minutos',
      currencySymbol: '€',
      pricePair: 'ADA-EUR',
      coinQuora: 'https://coinquora.com/es/?s=cardano',
      cointelegraph: 'https://es.cointelegraph.com/search?query=Cardano',
      etoro: 'https://www.etoro.com/es/',
      coinbase: 'https://www.coinbase.com/es/',
      kraken: 'https://www.kraken.com/es-es/',
    };
  } else if (code === 'pt-pt') {
    dict = {
      contactUs: 'Contacte-nos',
      publicMetrics: 'Métricas Públicas',
      awards: 'PRÉMIOS',
      news: 'Notícias Cardano',
      subscribe: 'Inscreva-se para receber atualizações de piscina',
      phone: 'Telefone',
      name: 'Nome',
      firstName: 'Primeiro nome',
      lastName: 'Último Nome',
      email: 'Email',
      emailAddress: 'Endereço de e-mail',
      emailSubject: 'Assunto',
      emailBody: 'Mensagem',
      countryCodeDescription: 'Número de telefone, incluindo código de país',
      howToBuy: 'COMO COMPRAR',
      buyOn: 'Pode comprar: ',
      submit: 'Enviar',
      signUp: 'Registar-me',
      contactUsDescription:
        'Se tiver alguma dúvida ou comentário, contacte-nos por e-mail ou telefone ou envie-nos uma mensagem utilizando o formulário de contacto.',
      relays: 'RETRANSMISSORES',
      ends: 'Termina em',
      price: 'Preço',
      priceTip: 'Preço do Cardano USD',
      howToStake: 'COMO APOSTAR',
      stakeOn: 'Pode apostar: ',
      ticker: 'Símbolo do carrapato',
      poolId: 'ID da piscina',
      epoch: 'Época',
      epochTip:
        'A rede Cardano divide o tempo em períodos chamados épocas. Uma época dura aproximadamente 5 dias.',
      pledge: 'Promessa',
      pledgeTip:
        'A quantia que o dono da piscina se compromete a delegar na piscina.',
      totalStake: 'Participação Total',
      totalStakeTip: 'O montante total a ser delegado em tempo real.',
      delegators: 'Delegadores',
      delegatorsTip: 'O número de carteiras delegando na piscina.',
      margin: 'Margem',
      marginTip:
        'Uma percentagem das recompensas totais do pool tomadas pelo operador da piscina de apostas após o custo fixo.',
      fixedCost: 'Custo Fixo',
      fixedCostTip:
        'O custo fixo da piscina é retirado das recompensas da piscina em cada época. Esta taxa é partilhada entre todos os delegados da piscina, não por delegador. O valor mínimo é de 340 ADA.',
      lifetimeROA: 'RoA vitalícia',
      lifetimeROATip:
        'Retorno Estimado da ADA, anualizado com base em recompensas de aposta vitalícia. As recompensas do proprietário/líder estão excluídas do cálculo.',
      epochBlocks: 'Blocos de Época',
      epochBlocksTip: 'O número de blocos cunhados na época real.',
      lifetimeBlocks: 'Blocos de vida',
      lifetimeBlocksTip: 'O número de blocos cunhados durante toda a vida.',
      lifetimeLuck: 'Sorte vitalícia',
      lifetimeLuckTip:
        'Uma medida de quantos blocos foram produzidos vs a quantidade que se espera que a piscina produza. A longo prazo, a média da sorte é de 100%.',
      supporter: 'ADApools.org Nível 3 Apoiante',
      formSubmission: 'Obrigado! Foi-lhe enviado um e-mail de confirmação.',
      relaysTip:
        'Os nós de retransmissão funcionam como proxies entre os nós da rede principal e a internet, estabelecendo um perímetro de segurança em torno do núcleo, nó de rede de produção de blocos. Os relés asseguram que a integridade dos nós do núcleo e da blockchain permanece intacta, mesmo que um ou mais relés fiquem comprometidos.',
      howToStakeTip:
        'A ADA usada para apostar nunca sai da carteira do delegado, e os delegados ganham recompensas de uma forma semelhante ao interesse numa conta poupança. Os delegadores podem mover o seu ADA livremente depois de ter sido estacadado ou mesmo descodificá-lo completamente, se assim o desejarem.',
      poolDescription:
        'A nossa piscina é nova e precisa da sua ajuda para crescer. Estamos empenhados em nunca perder um quarteirão. Maximize as suas recompensas com margem zero, segurança em várias camadas, monitorização 24/7, nós de alto desempenho e ligações geo-redundantes.',
      priceTip: 'Cardano Euro price',
      endsDay: 'dias',
      endsHour: 'horas',
      endsMinute: 'minutos',
      currencySymbol: '€',
      pricePair: 'ADA-EUR',
      coinQuora: 'https://coinquora.com/pt-pt/?s=cardano',
      etoro: 'https://www.etoro.com/pt-pt/',
      coinbase: 'https://www.coinbase.com/pt-PT',
    };
  } else if (code === 'ko') {
    dict = {
      contactUs:              "문의하기",
	  publicMetrics:          "공개 측정항목",
	  awards:                 "수상",
	  news:                   "카르다노 뉴스",
	  subscribe:              "풀 업데이트를 받으려면 가입하세요.",
	  phone:                  "핸드폰",
	  name:                   "이름",
	  firstName:              "이름",
	  lastName:               "성",
	  email:                  "이메일",
	  emailAddress:           "이메일 주소",
	  emailSubject:           "주제",
	  emailBody:              "메세지",
	  countryCodeDescription: "국가 코드를 포함한 전화번호",
	  howToBuy:               "구입 방법",
	  buyOn:                  "다음에서 구매할 수 있습니다.",
	  submit:                 "제출하다",
	  signUp:                 "가입하기",
	  contactUsDescription:   "질문이나 의견이 있으면 이메일이나 전화로 문의하거나 문의 양식을 사용하여 메시지를 보내주십시오.",
	  relays:                 "릴레이",
	  ends:                   "종료",
	  price:                  "가격",
	  howToStake:             "스테이킹 방법",
	  stakeOn:                "다음을 통해 스테이킹할 수 있습니다.",
	  ticker:                 "증권 시세 표시기",
	  poolId:                 "풀 ID",
	  epoch:                  "시대",
	  epochTip:               "Cardano 네트워크는 시간을 에포크(epoch)라고 하는 기간으로 분할합니다. 한 Epoch는 약 5일 동안 지속됩니다.",
	  pledge:                 "약속",
	  pledgeTip:              "스테이크 풀 소유자가 풀에 위임하기로 약정한 금액입니다.",
	  totalStake:             "총 지분",
	  totalStakeTip:          "실시간으로 위임되는 총액입니다.",
	  delegators:             "위임자",
	  delegatorsTip:          "풀에 위임한 지갑의 수입니다.",
	  margin:                 "여유",
	  marginTip:              "고정 비용 후 스테이크 풀 운영자가 받은 풀의 총 보상 비율입니다.",
	  fixedCost:              "고정 비용",
	  fixedCostTip:           "풀의 고정 비용은 매 에포크마다 풀 보상에서 가져옵니다. 이 수수료는 위임자가 아닌 풀의 모든 위임자 간에 공유됩니다. 최소값은 340 ADA입니다.",
	  lifetimeROA:            "평생 ROA",
	  lifetimeROATip:         "평생 스테이킹 보상을 기반으로 연간 환산한 ADA의 예상 수익. 오너/리더 보상은 계산에서 제외됩니다.",
	  epochBlocks:            "에포크 블록",
	  epochBlocksTip:         "실제 에포크에서 발행된 블록의 수입니다.",
	  lifetimeBlocks:         "평생 블록",
	  lifetimeBlocksTip:      "발행된 블록의 수명.",
	  lifetimeLuck:           "평생 운",
	  lifetimeLuckTip:        "생성된 블록 수와 풀이 생성할 것으로 예상되는 양의 측정값입니다. 장기적으로 운은 평균 100%입니다.",
	  supporter:              "ADApools.org 레벨 3 서포터",
	  formSubmission:         "감사합니다! 확인 이메일이 전송되었습니다.",
	  relaysTip:              "릴레이 노드는 코어 네트워크 노드와 인터넷 사이에서 프록시 역할을 하여 블록을 생성하는 네트워크 노드 코어 주변에 보안 경계를 설정합니다. 릴레이는 하나 이상의 릴레이가 손상되더라도 코어 노드와 블록체인의 무결성이 손상되지 않은 상태로 유지되도록 합니다.",
	  howToStakeTip:          "스테이킹에 사용되는 ADA는 위임자의 지갑을 떠나지 않으며 위임자는 저축 계좌의 이자와 유사한 방식으로 보상을 받습니다. 위임자는 스테이킹된 ADA를 자유롭게 이동하거나 원하는 경우 완전히 언스테이킹할 수 있습니다.",
	  poolDescription:        "우리 수영장은 새로 생겼고 성장하려면 여러분의 도움이 필요합니다. 우리는 블록을 놓치지 않기 위해 최선을 다하고 있습니다. 제로 마진, 다계층 보안, 연중무휴 모니터링, 고성능 노드 및 지리적 중복 연결을 통해 보상을 극대화하십시오.",
	  priceTip:               "카르다노 원화 가격",
	  endsDay:                "날",
	  endsHour:               "시간",
	  endsMinute:             "분",
	  currencySymbol:         "₩",
	  pricePair:              "ADA-KRW",
	  cointelegraph:          "https://kr.cointelegraph.com/search?query=%EC%B9%B4%EB%A5%B4%EB%8B%A4%EB%85%B8",
    };
  }
  
  const isHomePage = pathname === '/' || pathname.startsWith(`/${code}/home`);
  const isContactPage =
    pathname === '/contact' || pathname.startsWith(`/${code}/contact`);

  if (isHomePage || isContactPage) {
    var contactUs = $('a[href="/contact"]');

    contactUs.each(function () {
      $(this).attr('href', `/${code}/contact`);
    });

    $('a[id=site-title]').each(function () {
      $(this).attr('href', `/${code}/home`);
    });

    replaceText(contactUs, dict.contactUs);
    replaceText($("h4:contains('Public Metrics')"), dict.publicMetrics);

    if (isHomePage) {
      // default home page to english version
      replaceNavigationLink($(`a[href="/"]`), '/en/home');

      var poolId = '00a6461d1561987241f41c34d42c5c5830a11510d3007a32d33f007e';
      replaceText($('.tickerLabel'), dict.ticker);
      replaceText($('.poolIdLabel'), dict.poolId);
      replaceText($(`#${poolId}_ends`), dict.ends);
      replaceText($(`#${poolId}_ends_d_l`), dict.endsDay);
      replaceText($(`#${poolId}_ends_h_l`), dict.endsHour);
      replaceText($(`#${poolId}_ends_m_l`), dict.endsMinute);
      replaceText($(`#${poolId}_price_l`), dict.currencySymbol);

      $('#coinbasePriceEndpoint').attr(
        'href',
        `https://api.coinbase.com/v2/prices/${dict.pricePair}/spot`
      );
      replaceText($("h3:contains('AWARDS')"), dict.awards);
      replaceText($("h3:contains('HOW TO BUY')"), dict.howToBuy);
      replaceTextAndTooltip(
        $("h3:contains('HOW TO STAKE')"),
        dict.howToStake,
        dict.howToStakeTip
      );

      replaceText;

      replaceText($("h3:contains('Cardano News')"), dict.news);
      replaceText(
        $("h2:contains('Sign up to receive pool updates')"),
        dict.subscribe
      );

      $('button[type="Submit"]')
        .find('.newsletter-form-button-label')
        .text(dict.signUp);

      replaceText($("span:contains('Sign Up')"), dict.signUp);
      replaceText(
        $("p:contains('ADApools Level 3 Supporter')"),
        dict.supporter
      );
      replaceText($('#pool_description'), dict.poolDescription);

      $('input[name="email"]').attr('placeholder', dict.emailAddress);

      if (dict.coinQuora) {
        $("a:contains('CoinQuora')").attr('href', dict.coinQuora);
      }

      if (dict.cointelegraph) {
        $("a:contains('Cointelegraph')").attr('href', dict.cointelegraph);
      }

      if (dict.daedalus) {
        $("a:contains('Daedalus')").attr('href', dict.daedalus);
      }

      if (dict.etoro) {
        $("a:contains('eToro')").attr('href', dict.etoro);
      }

      if (dict.coinbase) {
        $("a:contains('Coinbase')").attr('href', dict.coinbase);
      }

      if (dict.kraken) {
        $("a:contains('Kraken')").attr('href', dict.kraken);
      }

      replaceTextAndTooltip($('.epoch').find('h4'), dict.epoch, dict.epochTip);
      replaceTextAndTooltip($('.ada').find('h4'), dict.price, dict.priceTip);
      replaceTextAndTooltip(
        $("h3:contains('RELAYS')"),
        dict.relays,
        dict.relaysTip
      );
      replaceTextAndTooltip($('#label_pledge'), dict.pledge, dict.pledgeTip);
      replaceTextAndTooltip(
        $('#label_totalstake'),
        dict.totalStake,
        dict.totalStakeTip
      );
      replaceTextAndTooltip(
        $('#label_delegators'),
        dict.delegators,
        dict.delegatorsTip
      );
      replaceTextAndTooltip($('#label_margin'), dict.margin, dict.marginTip);
      replaceTextAndTooltip(
        $('#label_fixedcost'),
        dict.fixedCost,
        dict.fixedCostTip
      );
      replaceTextAndTooltip(
        $('#label_lifetimeroa'),
        dict.lifetimeROA,
        dict.lifetimeROATip
      );
      replaceTextAndTooltip(
        $('#label_epochblocks'),
        dict.epochBlocks,
        dict.epochBlocksTip
      );
      replaceTextAndTooltip(
        $('#label_lifetimeblocks'),
        dict.lifetimeBlocks,
        dict.lifetimeBlocksTip
      );
      replaceTextAndTooltip(
        $('#label_lifetimeluck'),
        dict.lifetimeLuck,
        dict.lifetimeLuckTip
      );

      replaceHtmlText(
        $("h4:contains('You can buy on: ')"),
        'You can buy on: ',
        dict.buyOn
      );

      replaceHtmlText(
        $("h4:contains('You can stake through: ')"),
        'You can stake through: ',
        dict.stakeOn
      );

      replaceText($('.form-submission-text').find('p'), dict.formSubmission);
    } else if (isContactPage) {
      replaceNavigationLink($(`a[href="/"]`), '/en/contact');

      supportedLanugages.forEach((x) => {
        replaceNavigationLink($(`a[href="/${x}/home"]`), `/${x}/contact`);
      });

      replaceText($("strong:contains('Email')"), dict.email);
      replaceText($("strong:contains('Phone')"), dict.phone);
      replaceText($("label:contains('Phone')"), dict.phone);
      replaceText($('.description'), dict.countryCodeDescription);
      replaceText($("legend:contains('Name')"), dict.name);
      replaceText($("span:contains('First Name')"), dict.firstName);
      replaceText($("span:contains('Last Name')"), dict.lastName);

      $('input[type="Submit"]').attr('value', dict.submit);

      var contactUs = $("h2:contains('Contact us')");
      replaceText(contactUs, dict.contactUs2 || dict.contactUs);

      replaceHtmlText(contactUs.next(), '---', dict.contactUsDescription);
      replaceHtmlText($("label:contains('Email')"), 'Email', dict.email);
      replaceHtmlText(
        $("label:contains('Subject')"),
        'Subject',
        dict.emailSubject
      );
      replaceHtmlText(
        $("label:contains('Message')"),
        'Message',
        dict.emailBody
      );
    }
  }
});

// This code will execute as soon as the document is loaded
$(document).ready(function () {
  tippy.setDefaultProps({ allowHTML: true });
  $('a[href^="#tooltip_"]').each(function (i) {
    let link = $(this).attr('href');
    $(this).attr('data-tippy-content', link.replace('#tooltip_', ''));
    if (link.startsWith('#tooltip_')) {
      $(this).removeAttr('href').css('cursor', 'pointer');
    }
  });
  tippy('[data-tippy-content]');
});

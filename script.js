// ページのすべての要素が読み込まれてからJavaScriptを実行するための記述
document.addEventListener('DOMContentLoaded', () => {

    // HTMLから必要な要素を取得
    const passwordForm = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const passwordScreen = document.getElementById('password-screen');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');
    const passwordContainer = document.querySelector('.password-container');

    // 正しいパスワードを設定
    const correctPassword = '4081';

    // ログインボタンが押された（フォームが送信された）ときの処理
    passwordForm.addEventListener('submit', (event) => {
        // フォーム送信時のページの再読み込みを防止
        event.preventDefault();

        // 入力されたパスワードを取得
        const enteredPassword = passwordInput.value;

        // パスワードが正しいかどうかを判定
        if (enteredPassword === correctPassword) {
            // --- 認証に成功した場合の処理 ---

            // エラーメッセージを消す
            errorMessage.textContent = '';
            
            // パスワード画面に「fade-out」クラスを追加（CSSでアニメーションさせるための準備）
            passwordScreen.classList.add('fade-out');

            // フェードアウトのアニメーションが終わったタイミングで、パスワード画面を完全に非表示にする
            passwordScreen.addEventListener('animationend', () => {
                passwordScreen.style.display = 'none';
            }, { once: true }); // この処理は一回だけ実行する

            // メインコンテンツを表示状態にする
            mainContent.style.display = 'block';
            // メインコンテンツに「fade-in」クラスを追加（CSSでアニメーションさせるための準備）
            mainContent.classList.add('fade-in');

        } else {
            // --- 認証に失敗した場合の処理 ---

            // エラーメッセージを表示
            errorMessage.textContent = 'パスワードが違います';
            
            // 入力されたパスワードを消去
            passwordInput.value = '';

            // 認証失敗時にコンテナを揺らすアニメーションのクラスを追加
            passwordContainer.classList.add('shake');
            
            // 揺れるアニメーションが終わったら、次の入力のためにクラスを削除
            passwordContainer.addEventListener('animationend', () => {
                passwordContainer.classList.remove('shake');
            }, { once: true });
        }
    });
});